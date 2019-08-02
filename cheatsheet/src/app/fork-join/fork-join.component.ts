import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Family } from '../mock-http/family';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})

export class ForkJoinComponent extends AbstractOperatorComponent {
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
        tap(() => this.addOperation('forkJoin())')),
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
