export interface Product {
  id: number;
  name: string;
  price: number;
}

export type ProductStatus = {
  type: 'loading' | 'success' | 'error';
  message?: string;
};
