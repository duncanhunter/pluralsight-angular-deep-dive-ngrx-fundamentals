import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, catchError, of } from 'rxjs';
import { ProductsService } from '../products.service';
import { productsPageOpened, ProductsAPIActions } from './products.actions';

export const loadProducts$ = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(productsPageOpened),
      concatMap(() =>
        productsService.getProducts().pipe(
          map((products) =>
            ProductsAPIActions.productsFetchedSuccess({ products })
          ),
          catchError((error) =>
            of(ProductsAPIActions.productsFetchedFailure({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
