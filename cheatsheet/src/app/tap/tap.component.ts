import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Family } from '../mock-http/Family';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent extends AbstractOperatorComponent {
  public demoHasStarted = false;

  constructor(private httpClient: HttpClient) {
    super();
  }

  public startRequest(): void {
    this.resetDemo();
    this.demoHasStarted = true;
    this.addOperation("httpClient.get<Family>('example.com/family')");
    this.addIntermediateResult(null);
    this.httpClient
      .get<Family>('example.com/family')
      .pipe(
        delay(1000),
        tap(() => this.addOperation('tap(data => console.log(data)))')),
        tap(() => this.addIntermediateResult(null)),
        delay(1000),
        tap(data => console.log(data)),
        tap(() => this.addOperation('tap(data => console.log(data.constructor.name))')),
        tap(() => this.addIntermediateResult(null)),
        tap(data => console.log(data.constructor.name))
      )
      .subscribe();
  }

  public onSecondButtonClick() {}

  public resetDemo(): void {
    this.demoHasStarted = false;
    super.resetDemo();
  }
}
