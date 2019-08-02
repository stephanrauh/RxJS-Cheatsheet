```typescript
this.httpClient
  .get<Family>('example.com/family')
  .pipe(<%= dasherize(operator) %>(data => data.address))
  .subscribe();
```
