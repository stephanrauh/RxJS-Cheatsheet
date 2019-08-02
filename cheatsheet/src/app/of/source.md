```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    of(data => data.address)
  )
  .subscribe();
```
