import React from 'react';
import { BasketProduct } from '../BasketProduct';

import styles from './entities.module.scss';
import type { IBasketProduct } from '@entities/Basket';

const MemoizedBasketProductList = ({ items }: { items: IBasketProduct[] }) => {
  return (
    <div className={styles.basketProductList}>
      {items.map((item: IBasketProduct) => (
        <BasketProduct
          id={item.id}
          key={item.id}
          quantity={item.quantity}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};
const BasketProductList = React.memo(MemoizedBasketProductList);
export { BasketProductList };
