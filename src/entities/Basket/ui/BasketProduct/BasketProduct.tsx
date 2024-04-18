import React from 'react';
import styles from './entities.module.scss';
import { IBasketProduct } from '@entities/Basket';

const MemoizedBasketProduct = ({ name, quantity, price }: IBasketProduct) => {
  return (
    <div className={styles.basketProduct}>
      <span className={styles.basketProduct__name}>{name}</span>
      <span className={styles.basketProduct__count}>{quantity}</span>
      <span className={styles.basketProduct__price}>{price}</span>
    </div>
  );
};
const BasketProduct = React.memo(MemoizedBasketProduct);
export { BasketProduct };
