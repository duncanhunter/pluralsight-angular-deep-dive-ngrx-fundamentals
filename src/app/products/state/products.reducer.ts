import { createReducer, on } from '@ngrx/store';
import { Product, ProductStatus } from '../product.model';
import { productsPageOpened, ProductsAPIActions } from './products.actions';

export interface ProductsState {
  products: Product[];
  status: ProductStatus;
}

export const initialState: ProductsState = {
  products: [],
  status: { type: 'idle' }
};

export const productsReducer = createReducer(
  initialState,
  on(productsPageOpened, (state) => ({
    ...state,
    status: { type: 'loading' }
  })),
  on(ProductsAPIActions.productsFetchedSuccess, (state, { products }) => ({
    ...state,
    products,
    status: { type: 'loaded' }
  })),
  on(ProductsAPIActions.productsFetchedFailure, (state, { error }) => ({
    ...state,
    products: [],
    status: { type: 'error', message: error }
  }))
);
