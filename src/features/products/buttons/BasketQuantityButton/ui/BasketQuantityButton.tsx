import React from 'react';
import { Button } from '@ui/Button';
import { InputProductQuantity } from 'src/shared/ui/InputProductQuantity';
import { useBasket } from '@entities/Basket';

import styles from './features.module.scss';

interface IChangeQuantityOfProductInBasketProps {
  basketProductId: number;
  basketProductQuantity: number;
}

/**
 * Кнопки для изменения количество товара в корзине
 * @param basketProductId
 * @param basketProductQuantity
 * @constructor
 */
const BasketQuantityButton = ({ basketProductId, basketProductQuantity }: IChangeQuantityOfProductInBasketProps) => {
  const { onChangeProductQuantity, onRemoveProductToBasket } = useBasket();

  /**
   * Увеличение количества продукта в корзине
   * @param id
   * @param quantity
   */
  const handleAddQuantity = (id: number, quantity: number) => {
    onChangeProductQuantity(id, quantity + 1);
  };

  /**
   * Уменьшение количества продукта в корзине
   * @param id
   * @param quantity
   */
  const handleRemoveQuantity = (id: number, quantity: number) => {
    if (quantity - 1 <= 0) {
      onRemoveProductToBasket(id);
      return;
    }
    onChangeProductQuantity(id, quantity - 1);
  };

  return (
    <div className={styles.basketQuantityButton}>
      <Button onClick={() => handleRemoveQuantity(basketProductId, basketProductQuantity)} size={'xss'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.basketQuantityButton__icons}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </Button>
      <InputProductQuantity name="basket-quantity-button" value={basketProductQuantity} />
      <Button onClick={() => handleAddQuantity(basketProductId, basketProductQuantity)} size={'xss'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.basketQuantityButton__icons}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Button>
    </div>
  );
};

export { BasketQuantityButton };
