import React from 'react';
import { IProduct } from '@entities/Products';
import { Button } from '@ui/Button';
import { useBasket } from '@shared/lib/hooks';

import styles from './features.module.scss';

interface IAddProductBasketProps {
  product: IProduct;
}

/**
 * Кнопка добавление товара в корзину
 * @param product - Товар который добавляется в корзину
 * @constructor
 */
const AddToBasketButton = ({ product }: IAddProductBasketProps) => {
  const { onAddProductToBasket } = useBasket();

  return (
    <Button
      onClick={() => onAddProductToBasket(product)}
      classNameButton={styles.addProductBasketToButton}
    >
      Купить
    </Button>
  );
};

export { AddToBasketButton };
