```typescript
private subscription: Subscription;

this.subscription = this.httpClient
  .get<any>('example.com/family')
  .pipe(
    take(1),
    tap(data => console.log(data))
  )
  .subscribe();
```
