import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

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
    const list = [
      ajax.getJSON('https://api.github.com/users/google').pipe(map((r: any) => r.public_repos)),
      ajax.getJSON('https://api.github.com/users/opitzconsulting').pipe(map((r: any) => r.public_repos)),
      ajax.getJSON('https://api.github.com/users/stephanrauh').pipe(map((r: any) => r.public_repos))
    ];
    this.addOperation('listOfUrls = { ... }');
    this.addIntermediateResult(null);
    this.addOperation('forkJoin(list)');
    forkJoin(list)
      .pipe(tap(result => this.addIntermediateResult(result)))
      .subscribe();
  }

  public onSecondButtonClick() {}

  public resetDemo(): void {
    this.demoHasStarted = false;
    super.resetDemo();
  }
}
