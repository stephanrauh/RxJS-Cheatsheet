```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    toArray(data => data.address)
  )
  .subscribe();
```
