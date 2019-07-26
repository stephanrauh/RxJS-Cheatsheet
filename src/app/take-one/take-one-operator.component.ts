import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay, first } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-take-one-operator',
  templateUrl: './take-one-operator.component.html',
  styleUrls: ['./take-one-operator.component.css']
})
export class TakeOneOperatorComponent extends AbstractOperatorComponent {
  public subscription: Subscription;

  constructor(private httpClient: HttpClient) {
    super();
  }

  public startRequest(): void {
    this.resetDemo();
    this.addOperation("httpClient.get('example.com/family')");
    this.subscription = this.httpClient
      .get<any>('xexample.com/family')
      .pipe(
        tap(() => this.addIntermediateResult(null)),
        delay(1000),
        first(),
        tap(() => this.addOperation('take(1) or first()')),
        tap(data => this.addIntermediateResult(data)),
        delay(1000),
        tap(() => this.addOperation('tap(data => console.log(data))')),
        tap(data => this.addIntermediateResult(data)),
        tap(data => console.log(data))
      )
      .subscribe(
        () => console.log('got data' + this.subscription.closed),
        () => console.log('got an error'),
        () => console.log('completed ' + this.subscription.closed)
      );
  }
}
