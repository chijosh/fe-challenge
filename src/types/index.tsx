export interface ProductState {
  products: Array<IProductItem>;
}

export interface AppState {
  AllProducts: ProductState;
  selectedProduct: IProductItem;
  cart: IProductItem[];
  totalPrice: number;
  totalTaxRate: number;
}

export type IProductItem = {
  id: string;
  productName: string;
  maxAmount: number;
  taxRate: number;
  price: number;
  quantity: number;
};

export type CartState = IProductItem[];
