import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockHttp implements HttpInterceptor {
  constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('https://www.example.com')) {
      return of(this.family());
    }
    return next.handle(request);
  }

  public family(): HttpResponse<any> {
    const result = new HttpResponse({ body: { members: 3 }, status: 200 });
    return result;
  }
}
