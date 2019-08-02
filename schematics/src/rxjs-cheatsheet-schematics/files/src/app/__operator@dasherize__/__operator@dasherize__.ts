import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Family } from '../mock-http/Family';

@Component({
  selector: 'app-<%= dasherize(operator) %>',
  templateUrl: './<%= dasherize(operator) %>.component.html',
  styleUrls: ['./<%= dasherize(operator) %>.component.css']
})

export class <%= classify(operator) %>Component extends AbstractOperatorComponent {
  public demoHasStarted = false;

  constructor(private httpClient: HttpClient) {
    super();
  }

  public startRequest(): void {
    this.resetDemo();
    this.demoHasStarted = true;
    this.addOperation("httpClient.get('example.com/family')");
    this.httpClient
      .get<Family>('example.com/family')
      .pipe(
        delay(1000),
        tap(() => this.addOperation('<%= camelize(operator) %>())')),
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
