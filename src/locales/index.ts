// interface Product {
//   product: string;
//   cart: string;
//   checkout: string;
//   inStore: string;
//   addToCart: string;
//   updateCart: string;
//   Quantity: string;
//   InStore: string;
//   productName: string;
//   amount: string;
//   price: string;
// }

export const lang: Record<string, any> = {
  de: {
    product: 'Produkt',
    products: 'Produkts',
    cart: 'Wagen',
    buy: 'Kaufen',
    checkout: 'Kasse',
    inStore: 'auf Lager',
    addToCart: 'Produkt hinzufugen',
    updateCart: 'Warenkorb aktualisieren',
    update: 'Aktualisieren',
    quantity: 'Anzahl',
    productName: 'Produktname',
    amount: 'Menge',
    price: 'Preis',
    unitPrice: 'Stuckpreis',
    emptyCart: 'Leerer Warenkorb',
    cartClearedSuccess: 'Einkaufswagen erfolgreich geleert',
    cartMaxItem: 'Darf nicht mehr als 10 Artikel im Warenkorb haben'
  },
  en: {
    product: 'Product',
    products: 'Products',
    cart: 'Cart',
    buy: 'Buy',
    checkout: 'Checkout',
    inStore: 'in Store',
    addToCart: 'Add to Cart',
    updateCart: 'Update Cart',
    update: 'Update',
    quantity: 'Quantity',
    productName: 'Product name',
    amount: 'Amount',
    price: 'Price',
    unitPrice: 'Unit price',
    emptyCart: 'Empty cart',
    cartClearedSuccess: 'Cart successfully cleared',
    cartMaxItem: `Can't have more than 10 items in cart`
  }
};
