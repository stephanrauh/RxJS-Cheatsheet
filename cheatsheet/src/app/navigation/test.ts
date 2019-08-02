import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

class Person {}

export class UserComponent implements OnDestroy {
  private person$: Observable<Person>;
  private personSubscription: Subscription;

  private constructor(private httpClient: HttpClient) {
    this.person$ = httpClient.get('example.com/person/17');
    this.personSubscription = this.person$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.personSubscription.closed) {
      this.personSubscription.unsubscribe();
    }
  }
}
