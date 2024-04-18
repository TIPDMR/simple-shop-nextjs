import { IProduct } from '@entities/Products';
import { useBasketStore } from '@app/store/basketStore';

export const useBasket = () => {
  const addProductToBasket = useBasketStore(
    (state) => state.addProductToBasket
  );
  const productBasket = useBasketStore((state) => state.products);

  const handleAddProduct = (product: IProduct) => {
    addProductToBasket({
      id: product.id,
      name: product.title,
      quantity: 1,
      price: product.price,
    });
  };

  return {
    onAddProductToBasket: handleAddProduct,
    isProductBasketList: productBasket,
  };
};
