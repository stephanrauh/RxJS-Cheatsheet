```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    tap(data => console.log(data)),
    tap(data => console.log(data.constructor.name))
  )
  .subscribe();
```
