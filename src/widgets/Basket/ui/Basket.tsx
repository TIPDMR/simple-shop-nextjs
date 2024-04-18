'use client';
import React from 'react';
import { Heading } from '@ui/Heading';
import { OrderForm } from '@widgets/OrderForm';
import { BasketProductList, useBasket } from '@entities/Basket';

import styles from './widgets.module.scss';

const Basket = () => {
  const { isProductBasketList } = useBasket();
  return (
    <div className={styles.basket}>
      <Heading tag={'h2'}> Добавленные товары</Heading>
      <BasketProductList items={isProductBasketList}></BasketProductList>
      <OrderForm />
    </div>
  );
};

export { Basket };
