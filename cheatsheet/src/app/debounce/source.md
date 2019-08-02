```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    debounce(data => data.address)
  )
  .subscribe();
```
