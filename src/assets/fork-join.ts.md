```typescript
this.httpClient
  .get('https://www.example.com/familyIds')
  .pipe(
    tap(data => this.addIntermediateResult(data))
    // todo: forkJoin calling the https://www.example.com/person/{{id}}
  )
  .subscribe();
```
