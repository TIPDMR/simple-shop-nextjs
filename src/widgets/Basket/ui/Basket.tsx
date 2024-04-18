'use client';
import React from 'react';
import { Heading } from '@ui/Heading';
import { OrderForm } from '@widgets/OrderForm';
import { BasketProductList, type IBasketProduct, useBasket } from '@entities/Basket';

import styles from './widgets.module.scss';
import { BasketProduct } from '@entities/Basket/ui/BasketProduct';
import { RemoveProductFromBasket } from '@features/basket/buttons';

const Basket = () => {
  const { isProductBasketList } = useBasket();
  return (
    <div className={styles.basket}>
      <Heading tag={'h2'}> Добавленные товары</Heading>
      <BasketProductList>
        {isProductBasketList.map((item: IBasketProduct) => (
          <BasketProduct
            key={item.id}
            product={item}
            deleteButton={(<RemoveProductFromBasket product={item} />)}
          />
        ))}
      </BasketProductList>
      <OrderForm />
    </div>
  );
};

export { Basket };
