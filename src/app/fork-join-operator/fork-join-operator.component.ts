import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap, delay, concatMap } from 'rxjs/operators';

export interface Step {
  algorithm?: string;
  data?: string;
}

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.css']
})
export class ForkJoinOperatorComponent implements OnInit, AfterViewInit {
  public result: BehaviorSubject<string> = new BehaviorSubject<string>('3');

  public algorithm: Array<Step> = [];

  constructor(private httpClient: HttpClient) {
    this.resetDemo();
  }

  ngOnInit() {}

  ngAfterViewInit(): void {}

  public startRequest(): void {
    const readNameRequest = (id: string) => this.httpClient.get<string>('example.com/family/name/{id}');

    const readMultipleNames = (ids: Array<string>) => ids.map(id => readNameRequest(id));

    this.resetDemo();
    this.addOperation("httpClient.get('example.com/familyIds')");
    this.httpClient
      .get<string[]>('https://www.example.com/familyIds')
      .pipe(
        tap(() => this.addIntermediateResult(null)),
        delay(1000),
        tap(() => this.addOperation('pipe(...)')),
        tap(data => this.addIntermediateResult(data)),
        delay(1000)
        // map(ids => from(ids).pipe(concatMap(id => this.httpClient.get(`example.com/person/${id}`)))),
        // tap(x => console.log(x))

        // ids.map(id => this.httpClient.get<any>('https://www.example.com/familyIds')))
        // todo: forkJoin calling the https://www.example.com/person/{{id}}
      )
      .subscribe();
  }

  public resetDemo(): void {
    this.result.next(undefined);
    this.algorithm = [];
  }

  public addOperation(typescript: string) {
    this.algorithm.push({ algorithm: typescript });
  }

  public addIntermediateResult(data: any) {
    if (data === null) {
      this.algorithm.push({ data: '' });
      this.result.next(undefined);
    } else {
      this.algorithm.push({ data: JSON.stringify(data) });
      this.result.next(JSON.stringify(data));
    }
  }
}
