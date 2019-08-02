import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Persons } from './persons';
import { Person } from './person';
import { IdList } from './id-list';
import { Family } from './family';

@Injectable()
export class MockHttp implements HttpInterceptor {
  constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('example.com/familyIds')) {
      return of(this.familyIds());
    } else if (request.url.startsWith('example.com/family')) {
      return of(this.family());
    } else if (request.url.startsWith('example.com/persons/')) {
      const id = Number(request.url.replace('example.com/persons/', ''));
      return of(this.person(id));
    } else if (request.url.startsWith('example.com/persons')) {
      return of(this.persons());
    }
    return next.handle(request);
  }

  public family(): HttpResponse<Family> {
    const result = new HttpResponse({ body: { members: 3, address: 'Gummersbach' }, status: 200 });
    return result;
  }

  public familyIds(): HttpResponse<IdList> {
    const result = new HttpResponse({ body: { ids: [4234, 4701, 3284] }, status: 200 });
    return result;
  }

  public person(id: number): HttpResponse<Person> {
    let person: Person;
    switch (id) {
      case 4234:
        person = { id: 4234, name: 'John', lastName: 'Doe' };
        break;
      case 4701:
        person = { id: 4701, name: 'Jane', lastName: 'Doe' };
        break;
      case 3284:
        person = { id: 3284, name: 'Jimmy', lastName: 'Doe' };
        break;
      default:
        person = { id: null, name: 'Unknown', lastName: 'Person' };
    }
    const result = new HttpResponse({ body: person, status: 200 });
    return result;
  }

  public persons(): HttpResponse<Persons> {
    const persons: Persons = {
      persons: [
        { id: 4234, name: 'John', lastName: 'Doe' },
        { id: 4701, name: 'Jane', lastName: 'Doe' },
        { id: 3284, name: 'Jimmy', lastName: 'Doe' }
      ]
    };
    const result = new HttpResponse({ body: persons, status: 200 });
    return result;
  }
}
