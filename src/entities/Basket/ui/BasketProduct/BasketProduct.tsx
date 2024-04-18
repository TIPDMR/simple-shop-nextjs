import React, { ReactNode } from 'react';
import styles from './entities.module.scss';
import { IBasketProduct } from '@entities/Basket';

interface IBasketProductProps {
  deleteButton?: ReactNode;
  product: IBasketProduct;
}

const MemoizedBasketProduct = ({ product: { id, name, quantity, price }, deleteButton }: IBasketProductProps) => {
  return (
    <div className={styles.basketProduct}>
      {deleteButton && deleteButton}
      <span className={styles.basketProduct__name}>{name}</span>
      <span className={styles.basketProduct__count}>{quantity}</span>
      <span className={styles.basketProduct__price}>{price}</span>
    </div>
  );
};
const BasketProduct = React.memo(MemoizedBasketProduct);
export { BasketProduct };
