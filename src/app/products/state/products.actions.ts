import { createAction, createActionGroup, props } from '@ngrx/store';
import { Product } from '../product.model';

export const productsPageOpened = createAction('[Products List Page] Opened');

export const ProductsAPIActions = createActionGroup({
  source: 'Products API',
  events: {
    productsFetchedSuccess: props<{ products: Product[] }>(),
    productsFetchedFailure: props<{ error: string }>()
  }
});
