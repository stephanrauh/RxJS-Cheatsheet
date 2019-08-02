```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    switchMap(data => data.address)
  )
  .subscribe();
```
