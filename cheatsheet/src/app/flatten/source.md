```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    flatten(data => data.address)
  )
  .subscribe();
```
