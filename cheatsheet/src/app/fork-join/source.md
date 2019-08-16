```typescript
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

const list = [
  ajax.getJSON('https://api.github.com/users/google').pipe(map((r: any) => r.public_repos)),
  ajax.getJSON('https://api.github.com/users/opitzconsulting').pipe(map((r: any) => r.public_repos)),
  ajax.getJSON('https://api.github.com/users/stephanrauh').pipe(map((r: any) => r.public_repos))
];

forkJoin(list)
  .pipe(tap(result => console.log(result)))
  .subscribe();
```
