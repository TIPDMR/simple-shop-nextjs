export interface IBasketProduct {
  id: number;
  quantity: number;
  name: string;
  price: string;
}

export interface IBasket {
  phone: string;
  cart: IBasketProduct[];
}

export interface IBasketProductsMock {
  cart: IBasketProduct[];
}

export interface IBasketStore {
  products: IBasketProduct[];
  loading: boolean;
  error: string | null;
  addProductToBasket: (products: IBasketProduct) => void;
  removeProductFromBasket: (productId: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
}
