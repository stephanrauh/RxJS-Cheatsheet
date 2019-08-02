import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay, takeUntil } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrls: ['./take-until-operator.component.css']
})
export class TakeUntilOperatorComponent extends AbstractOperatorComponent {
  public isSubscriptionAlive = undefined;
  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {
    super();
  }

  public startRequest(): void {
    this.resetDemo();
    this.addOperation("httpClient.get('example.com/family')");
    this.httpClient
      .get<any>('example.com/family')
      .pipe(
        tap(() => this.addIntermediateResult(null)),
        tap(() => {
          this.isSubscriptionAlive = true;
        }),
        delay(1000),
        tap(() => this.addOperation('takeUntil(this.componentDestroyed$)')),
        tap(() => this.addIntermediateResult(null)),
        takeUntil(this.componentDestroyed$),
        tap(data => console.log(data))
      )
      .subscribe();
  }

  public onSecondButtonClick() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.unsubscribe();
    this.isSubscriptionAlive = false;
  }

  public resetDemo(): void {
    this.isSubscriptionAlive = undefined;
    super.resetDemo();
  }
}
