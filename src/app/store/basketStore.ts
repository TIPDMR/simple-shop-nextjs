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
        const currentProductList = get().products;
        set({ products: [...currentProductList, product] });
      },
      removeProductFromBasket: (productId: number) => {
        const currentProductList = get().products;
        const filterProduct = currentProductList.filter((getProduct: IBasketProduct) => getProduct.id !== productId);
        set({ products: [...filterProduct] });
      },
      changeQuantity: (productIds: number, quantity: number) => {
        const currentProductList = get().products;
        const newProductList = currentProductList.map((product) => {
          if (product.id === productIds) {
            return {
              ...product,
              quantity,
            };
          }
          return product;
        });

        set({ products: [...newProductList] });
      },
    }),
    {
      name: 'basket-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
