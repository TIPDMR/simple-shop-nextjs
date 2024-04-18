import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IBasketProduct } from '@entities/Basket';
import { IBasketStore } from '@entities/Basket/model/type';

export const useBasketStore = create<IBasketStore>()(
  persist(
    (set, get) => ({
      products: [],
      loading: false,
      error: null,
      addProductToBasket: (product: IBasketProduct) => {
        const currentProducts = get().products;
        set({ products: [...currentProducts, product] });
      },
      removeProductFromBasket: (product: IBasketProduct) => {
        const currentProducts = get().products;
        const filterProduct = currentProducts.filter((getProduct: IBasketProduct) => getProduct.id !== product.id);
        set({ products: [...filterProduct] });
      },
    }),
    {
      name: 'basket-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
