import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { Persons } from '../mock-http/persons';

@Component({
  selector: 'app-map-js-operator',
  templateUrl: './map-js-operator.component.html',
  styleUrls: ['./map-js-operator.component.css']
})
export class MapJsOperatorComponent extends AbstractOperatorComponent {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public startRequest(): void {
    this.resetDemo();
    this.addOperation("httpClient.get('example.com/family')");
    this.httpClient
      .get<Persons>('example.com/persons')
      .pipe(
        tap(() => this.addIntermediateResult(null)),
        delay(1000),
        map(data => data.persons.map(person => person.name)),
        tap(() => this.addOperation('map(data => data.persons.map(person => person.name)),')),
        tap(data => this.addIntermediateResult(data))
      )
      .subscribe();
  }
}
