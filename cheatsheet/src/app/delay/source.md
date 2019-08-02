```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    delay(data => data.address)
  )
  .subscribe();
```
