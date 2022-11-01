export interface ProductState {
  products: Array<IProductItem>;
}

export interface ModalState {
  isModalOpen: boolean;
}

export interface locale {
  locale: string;
  messages: Record<string, string>;
}

export interface AppState {
  AllProducts: ProductState;
  selectedProduct: IProductItem;
  cart: IProductItem[];
  modal: ModalState;
  totalPrice: number;
  totalTaxRate: number;
  snackbar: any;
  locale: locale;
}

export type IProductItem = {
  id: string;
  productName: string;
  maxAmount: number;
  taxRate: number;
  price: number;
  quantity: number;
};

export type ISnackbar = {
  message: string;
  type: string;
};

export type CartState = IProductItem[];
