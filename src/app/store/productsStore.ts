import { create } from 'zustand';
import type { IProduct, IProductsStore } from '@entities/Products';

/**
 * Хранилище со списком товаров и данными страницы
 */
export const useProductsStore = create<IProductsStore>()((set, get) => ({
  products: [],
  page: 1,
  loading: false,
  error: null,
  addProducts: (products: IProduct[]) => {
    const currentProducts = get().products;
    set({ products: [...currentProducts, ...products] });
  },
  setPage: (page: number) => {
    set({ page: page });
  },
}));
