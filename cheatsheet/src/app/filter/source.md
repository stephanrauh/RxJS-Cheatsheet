```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    filter(data => data.address)
  )
  .subscribe();
```
