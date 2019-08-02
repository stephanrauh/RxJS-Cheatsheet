import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Family } from '../mock-http/family';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})

export class UnsubscribeComponent extends AbstractOperatorComponent {
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
        tap(() => this.addOperation('unsubscribe())')),
        tap(() => this.addIntermediateResult(null)),
        take(1)
      )
      .subscribe();
  }

  public onSecondButtonClick() {
  }

  public resetDemo(): void {
    this.demoHasStarted = false;
    super.resetDemo();
  }
}
