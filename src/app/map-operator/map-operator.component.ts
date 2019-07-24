import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../abstract-operator-component';



@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent extends AbstractOperatorComponent {

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
        delay(1000),
        tap(() => this.addOperation('pipe(...)')),
        tap(data => this.addIntermediateResult(data)),
        delay(1000),
        map(data => data.address),
        tap(() => this.addOperation('map(data => data.address)')),
        tap(data => this.addIntermediateResult(data))
      )
      .subscribe();
  }


}
