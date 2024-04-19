import { useProductsStore } from '@app/store';

export const useProduct = () => {
  const addProducts = useProductsStore((state) => state.addProducts);
  const products = useProductsStore((state) => state.products);

  return {
    onAddProducts: addProducts,
    isProductsList: products,
  };
};
