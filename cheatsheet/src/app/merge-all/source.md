```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    mergeAll(data => data.address)
  )
  .subscribe();
```
