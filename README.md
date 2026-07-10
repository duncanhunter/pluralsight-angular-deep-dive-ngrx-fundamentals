# NgRx State Management in Angular

Demo code for the Pluralsight course **[NgRx State Management in Angular](https://www.pluralsight.com/courses/angular-deep-dive-ngrx-fundamentals)** by Duncan Hunter.

A small, zoneless, standalone Angular application that manages a list of products with [NgRx](https://ngrx.io/). It builds up the full NgRx data flow step by step — store, actions, reducer, effects, and selectors — with each course module captured on its own git branch.

## Tech stack

- **Angular 22** (standalone components, zoneless change detection)
- **NgRx 21** (`@ngrx/store`, `@ngrx/effects`)
- **TypeScript 6**
- **RxJS 7**

> **Note on package installation:** NgRx 21 declares a peer dependency on Angular `^21`, but this project runs Angular 22 (NgRx 22 is not released yet). A committed `.npmrc` sets `legacy-peer-deps=true` so a plain `npm install` works after a fresh clone. Remove that file once you upgrade to NgRx 22.

## Prerequisites

- **Node.js** `^20.19` || `^22.12` || `>=24` (required by Angular 22)
- **npm** 10+

Check your version with `node -v`.

## Getting started

```bash
git clone https://github.com/duncanhunter/pluralsight-angular-deep-dive-ngrx-fundamentals.git
cd pluralsight-angular-deep-dive-ngrx-fundamentals
npm install
npm start
```

Then open **http://localhost:4200/**. The app loads a products list through the NgRx store. The data comes from an in-memory service that simulates a ~30% failure rate, so refreshing occasionally shows the error state — this is intentional, to demonstrate effects handling both success and failure.

## Following along by module

Each module has a checkpoint branch. Check out the branch that matches where you are in the course:

| Branch | Where you are | What it adds |
| --- | --- | --- |
| `start` | Before writing any NgRx code | Plain Angular app: products component, service, and model |
| `module-2-complete` | After setting up NgRx | `provideStore()` and `provideEffects()` wired into `app.config.ts` |
| `module-3-complete` | After building the state slice | `products.actions.ts`, `products.reducer.ts`, `products.effects.ts` |
| `completed` | Finished course | Adds `products.selectors.ts` — the full NgRx data flow |

```bash
# start fresh from the beginning
git checkout start

# jump to the finished solution
git checkout completed
```

Run `npm install` again after switching branches if dependencies differ.

## Project structure

```
src/app/
├── app.config.ts               # App providers, including provideStore() / provideEffects()
├── app.ts                      # Root standalone component
└── products/
    ├── product.model.ts        # Product interface
    ├── products.service.ts     # In-memory data source (simulates async + failures)
    ├── products-list.component.ts
    └── state/
        ├── products.actions.ts     # Action creators
        ├── products.reducer.ts     # State transitions
        ├── products.effects.ts     # Side effects (loading products)
        └── products.selectors.ts   # Deriving state for the view
```

## NgRx concepts covered

- **Store & state** — modeling feature state and providing the store
- **Actions** — describing events with `createAction` / `props`
- **Reducers** — pure state transitions with `createReducer` / `on`
- **Effects** — handling async work and success/failure with `createEffect`
- **Selectors** — deriving and composing view data with `createSelector`

## Available scripts

| Script | Description |
| --- | --- |
| `npm start` | Run the dev server at `http://localhost:4200/` |
| `npm run build` | Production build to `dist/` |
| `npm run watch` | Rebuild on change (development configuration) |

## License

This code is provided for educational use alongside the Pluralsight course.
