'use client';
import React from 'react';
import { Heading } from '@ui/Heading';
import { OrderForm } from '@widgets/OrderForm';
import { BasketProduct, BasketProductList, type IBasketProduct, useBasket } from '@entities/Basket';


import styles from './widgets.module.scss';
import { RemoveProductFromBasket } from '@features/basket/buttons';

/**
 * Корзина
 * @constructor
 */
const Basket = () => {
  const { isProductBasketList } = useBasket();
  if (!isProductBasketList.length) return null;
  return (
    <div className={styles.basket}>
      <Heading tag={'h2'}>Добавленные товары</Heading>
      <BasketProductList>
        {isProductBasketList.map((basketProduct: IBasketProduct) => (
          <BasketProduct
            key={basketProduct.id}
            product={basketProduct}
            removeButton={<RemoveProductFromBasket product={basketProduct} />}
          />
        ))}
      </BasketProductList>
      <OrderForm />
    </div>
  );
};

export { Basket };
