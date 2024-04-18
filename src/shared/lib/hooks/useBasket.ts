import { IProduct } from '@entities/Products';
import { useBasketStore } from '@app/store/basketStore';
import { IBasketProduct } from '@entities/Basket';

/**
 * Хук для работы с корзиной
 */
export const useBasket = () => {
  const addProductToBasket = useBasketStore((state) => state.addProductToBasket);
  const removeProductToBasket = useBasketStore((state) => state.removeProductFromBasket);
  const productBasket = useBasketStore((state) => state.products);

  /**
   * Добавление товара в хранилище Zustand
   * @param product
   */
  const handleAddProduct = (product: IProduct) => {
    addProductToBasket({
      id: product.id,
      name: product.title,
      quantity: 1,
      price: product.price,
    });
  };

  /**
   * Удаление товара из хранилища Zustand
   * @param product
   */
  const handleRemoveProduct = (product: IBasketProduct) => {
    removeProductToBasket(product);
  };

  return {
    onAddProductToBasket: handleAddProduct,
    onRemoveProductToBasket: handleRemoveProduct,
    isProductBasketList: productBasket,
  };
};
