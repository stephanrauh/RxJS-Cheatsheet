```typescript
this.httpClient
  .get('example.com/family')
  .pipe(map(data => data.address))
  .subscribe();
```
