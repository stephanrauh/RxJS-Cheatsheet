import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapOperatorComponent implements OnInit {
  public result: Observable<number>;

  constructor(private httpClient: HttpClient) {
    this.resetDemo();
  }

  ngOnInit() {}

  public startRequest(): void {
    this.result = this.httpClient.get<any>('https://www.example.com/family').pipe(map(data => data.members));
  }

  public resetDemo(): void {
    this.result = new BehaviorSubject<number>(undefined);
  }
}
