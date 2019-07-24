import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map, tap, delay, flatMap } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../abstract-operator-component';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.css']
})
export class ForkJoinOperatorComponent extends AbstractOperatorComponent {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public startRequest(): void {
    this.resetDemo();
    this.addOperation("httpClient.get('example.com/familyIds')");
    this.httpClient
      .get<any>('example.com/familyIds')
      .pipe(
        tap(() => this.addIntermediateResult(null)),
        delay(1000),
        tap(() => this.addOperation('pipe(...)')),
        tap(data => this.addIntermediateResult(data)),
        map(wrappedIds => wrappedIds.ids as string[]),
        tap(() => this.addOperation('map(wrappedIds => wrappedIds.ids as string[])')),
        tap(data => this.addIntermediateResult(data)),
        delay(1000),
        flatMap(ids => forkJoin(ids.map(id => this.httpClient.get(`example.com/person/${id}`)))),
        tap(() =>
          this.addOperation('flatMap(ids => forkJoin(ids.map(id => this.httpClient.get(`example.com/person/${id}`)))),')
        ),
        tap(data => this.addIntermediateResult(data)),
        map(persons => persons.map(person => person.name + ' ' + person.lastName)),
        tap(() => this.addOperation('map(persons => persons.map(person => person.name + " " + person.lastName)),'))
      )
      .subscribe();
  }
}
