```typescript
private componentDestroyed$: Subject<boolean> = new Subject<boolean>();
private subscription: Subscription;

public doSomething(): void {
this.subscription = this.httpClient
  .get<any>('example.com/family')
  .pipe(
    takeUntil(this.componentDestroyed$),
    tap(data => console.log(data))
  )
  .subscribe();
}

ngOnDestroy() {
  this.componentDestroyed$.next(true);
  // Now let's also unsubscribe from the subject itself:
  this.componentDestroyed$.unsubscribe();
}
```
