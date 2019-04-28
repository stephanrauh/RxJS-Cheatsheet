import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import Prism from 'prismjs';

export interface Step {
  algorithm?: string;
  data?: string;
}

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit, AfterViewInit {
  public result: BehaviorSubject<string> = new BehaviorSubject<string>('3');

  public algorithm: Array<Step> = [];

  constructor(private httpClient: HttpClient) {
    this.resetDemo();
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  public startRequest(): void {
    Prism.highlightAll();
    this.resetDemo();
    this.addOperation("httpClient.get('example.com/family')");
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
