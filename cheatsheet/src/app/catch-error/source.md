```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(
    catch-error(data => data.address)
  )
  .subscribe();
```
