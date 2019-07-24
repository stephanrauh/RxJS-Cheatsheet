import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockHttp implements HttpInterceptor {
  constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('example.com/familyIds')) {
      return of(this.familyIds());
    } else if (request.url.startsWith('example.com/family')) {
      return of(this.family());
    } else if (request.url.startsWith('example.com/person')) {
      const id = Number(request.url.replace('example.com/person/', ''));
      return of(this.person(id));
    }
    return next.handle(request);
  }

  public family(): HttpResponse<any> {
    const result = new HttpResponse({ body: { members: 3, address: 'Gummersbach' }, status: 200 });
    return result;
  }

  public familyIds(): HttpResponse<any> {
    const result = new HttpResponse({ body: { ids: [4234, 4701, 3284] }, status: 200 });
    return result;
  }

  public person(id: number): HttpResponse<any> {
    let person: object;
    switch (id) {
      case 4234:
        person = { name: 'John', lastName: 'Doe' };
        break;
      case 4701:
        person = { name: 'Jane', lastName: 'Doe' };
        break;
      case 3284:
        person = { name: 'Jimmy', lastName: 'Doe' };
        break;
      default:
        person = { name: 'Unknown', lastName: 'Person' };
    }
    const result = new HttpResponse({ body: person, status: 200 });
    return result;
  }
}
