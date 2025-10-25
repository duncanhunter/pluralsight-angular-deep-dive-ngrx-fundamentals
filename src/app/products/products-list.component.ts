import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { Store } from '@ngrx/store';
import { productsPageOpened } from './state/products.actions';
import { selectProducts, selectProductsCount, selectProductsStatus } from './state/products.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductStatus } from './product.model';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  template: `
    <div>
      <h1>Products</h1>
      
      @if (status().type === 'loading') {
        <div>Loading products...</div>
      }

      @if (status().type === 'error') {
        <div>Error: {{ status().message }}</div>
      }

      @if (status().type === 'loaded') {
        <div>
          @for (product of products(); track product.id) {
            <strong>{{ product.name }}</strong> - {{ product.price | currency }}
            <hr>
          }
          <p>Total: {{ productsCount() }} products</p>
        </div>
      }
    </div>
  `,
})
export class ProductsListComponent implements OnInit {
  private store = inject(Store);

  products = toSignal(this.store.select(selectProducts), { initialValue: [] });
  productsCount = toSignal(this.store.select(selectProductsCount), { initialValue: 0 });
  status = toSignal(this.store.select(selectProductsStatus), { initialValue: { type: 'idle' } as ProductStatus });

  ngOnInit(): void {
    this.store.dispatch(productsPageOpened());
  }
}
