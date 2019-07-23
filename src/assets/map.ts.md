```typescript
this.httpClient
  .get('https://www.example.com/family')
  .pipe(map(data => data.members))
  .subscribe();
```
