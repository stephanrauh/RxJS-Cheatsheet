# RxjsCheatsheet

Interactive cheatsheet to get familiar with RxJS.

## projects

This is a monorepo:

- The folder "cheatsheet" contains the application.
- The folder "schematics" contains an Angular schematics project allowing me (Stephan) to create the documentation faster.

## How to document new operators using the schematics

If you haven't compiled the schematics folder yet, follow these steps:

```
cd schematics
npm install @angular-devkit/schematics-cli -g
npm install
npm run build
cd ..
```

To create the documentation for an operator like, say, `filter`, run this statement:
```
cd cheatsheet
schematics ../schematics/src/collection.json:cheatsheet filter --dry-run=false
```

You have to add the new documentation manually to
- app.routing.module.ts
- app.module.ts
- navigation.component.html