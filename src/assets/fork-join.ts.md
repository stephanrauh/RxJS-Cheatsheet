```typescript

this.httpClient
  .get('example.com/familyIds')
  .pipe(
    map(wrappedIds => wrappedIds.ids as string[]),
    flatMap(ids => 
      forkJoin(ids.map(id => this.httpClient.get(`example.com/person/${id}`)))
    ),
    map(persons => persons.map(p => p.name + ' ' + p.lastName)),
  )
  .subscribe();
```
