export interface ProductState {
  products: Array<IProductItem>;
  selectedProduct: IProductItem | null;
}

export interface AppState {
  products: Array<IProductItem>;
  selectedProduct: IProductItem | null;
  cart: ShoppingCart[];
  totalPrice: number;
  totalTaxRate: number;
}

export type IProductItem = {
  id: string;
  productName: string;
  maxAmount: number;
  taxRate: number;
  price: number;
};

export interface ShoppingCart {
  product: IProductItem;
  count: number;
}
