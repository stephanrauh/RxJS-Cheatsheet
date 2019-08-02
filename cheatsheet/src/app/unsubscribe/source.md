```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    unsubscribe(data => data.address)
  )
  .subscribe();
```
