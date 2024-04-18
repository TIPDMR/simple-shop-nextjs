import React, { ReactNode } from 'react';
import styles from './entities.module.scss';
import { IBasketProduct } from '@entities/Basket';

interface IBasketProductProps {
  removeButton?: ReactNode;
  product: IBasketProduct;
}

/**
 * Карточка товара в корзине
 *
 * @param id
 * @param name
 * @param quantity
 * @param price
 * @param removeButton - кнопка для удаления товара из корзины
 * @constructor
 */
const MemoizedBasketProduct = ({ product: { id, name, quantity, price }, removeButton }: IBasketProductProps) => {
  return (
    <div className={styles.basketProduct}>
      {removeButton && removeButton}
      <span className={styles.basketProduct__name}>{name}</span>
      <span className={styles.basketProduct__count}>{quantity}</span>
      <span className={styles.basketProduct__price}>{price}</span>
    </div>
  );
};
const BasketProduct = React.memo(MemoizedBasketProduct);
export { BasketProduct };
