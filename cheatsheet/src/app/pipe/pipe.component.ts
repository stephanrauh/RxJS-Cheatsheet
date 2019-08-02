import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay, map } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Family } from '../mock-http/family';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent extends AbstractOperatorComponent {
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
        tap(() => this.addOperation('pipe()')),
        tap(data => this.addIntermediateResult(data)),
        delay(1000),
        map(data => data.address),
        tap(() => this.addOperation('map(data => data.address)')),
        tap(data => this.addIntermediateResult(data)),
        delay(1000),
        tap(address => console.log(address)),
        tap(() => this.addOperation('tap(address => console.log(address))')),
        tap(data => this.addIntermediateResult(data))
      )
      .subscribe();
  }

  public onSecondButtonClick() {}

  public resetDemo(): void {
    this.demoHasStarted = false;
    super.resetDemo();
  }
}
