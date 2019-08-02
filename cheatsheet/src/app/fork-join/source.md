```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    forkJoin(data => data.address)
  )
  .subscribe();
```
