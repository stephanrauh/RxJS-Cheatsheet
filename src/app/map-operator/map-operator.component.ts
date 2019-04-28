import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

export interface Step {
  algorithm?: string;
  data?: string;
}

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit {
  public result: BehaviorSubject<string> = new BehaviorSubject<string>('3');

  public algorithm: Array<Step> = [];

  constructor(private httpClient: HttpClient) {
    this.resetDemo();
  }

  ngOnInit() {}

  public startRequest(): void {
    this.resetDemo();
    this.addOperation("this.httpClient.get<any>('https://www.example.com/family')");
    this.httpClient
      .get<any>('https://www.example.com/family')
      .pipe(
        tap(() => this.addIntermediateResult(null)),
        delay(1000),
        tap(() => this.addOperation('pipe(...)')),
        tap(data => this.addIntermediateResult(data)),
        delay(1000),
        map(data => data.members),
        tap(() => this.addOperation('map(data => data.members)')),
        tap(data => this.addIntermediateResult(data))
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
