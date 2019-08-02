```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    map(data => data.address),
    tap(address => console.log(address))
  )
  .subscribe();
```
