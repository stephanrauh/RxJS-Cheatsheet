```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    subscribe(data => data.address)
  )
  .subscribe();
```
