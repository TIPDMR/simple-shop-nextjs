import React from 'react';
import { Button } from '@ui/Button';
import { useBasket } from '@shared/lib/hooks';
import { IBasketProduct } from '@entities/Basket';

import styles from './features.module.scss';

interface IRemoveProductToBasketProps {
  product: IBasketProduct;
}

/**
 * Кнопка удаление товара из корзины
 * @param product - Товар который удаляется из корзины
 * @constructor
 */
const RemoveFromBasketButton = ({ product }: IRemoveProductToBasketProps) => {
  const { onRemoveProductToBasket } = useBasket();
  return (
    <Button
      size={'auto'}
      bgColor={'transparent'}
      onClick={() => onRemoveProductToBasket(product.id)}
      classNameButton={styles.deleteProductBasketButton}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.deleteProductBasketButton__image}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </Button>
  );
};

export { RemoveFromBasketButton };
