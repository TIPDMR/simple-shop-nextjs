import { IProduct } from '@entities/Products';
import { useBasketStore } from '@app/store/basketStore';
import { IBasketProduct } from '@entities/Basket';

/**
 * Хук для работы с корзиной
 */
export const useBasket = () => {
  const addProductToBasket = useBasketStore((state) => state.addProductToBasket);
  const removeProductToBasket = useBasketStore((state) => state.removeProductFromBasket);
  const productBasketList = useBasketStore((state) => state.products);
  const changeQuantityProduct = useBasketStore((state) => state.changeQuantity);

  /**
   * Добавление товара в корзину
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
   * Удаление товара из корзины
   * @param productId - id товара
   */
  const handleRemoveProduct = (productId: number) => {
    removeProductToBasket(productId);
  };

  /**
   * Проверка находится ли товар в корзине
   * @param product - товар который ищем в корзине
   */
  const checkProductInBasket = (product: IProduct): IBasketProduct | false => {
    return productBasketList.find((productInBasket) => productInBasket.id === product.id) || false;
  };

  /**
   * Изменение количества товара в корзине
   * @param productId  - id товара
   * @param productQuantity - количество товара
   */
  const changeQuantity = (productId: number, productQuantity: number) => {
    changeQuantityProduct(productId, productQuantity);
  };

  return {
    onAddProductToBasket: handleAddProduct,
    onRemoveProductToBasket: handleRemoveProduct,
    isProductBasketList: productBasketList,
    onCheckProductInBasket: checkProductInBasket,
    onChangeProductQuantity: changeQuantity,
  };
};
