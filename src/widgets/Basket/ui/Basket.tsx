'use client';
import React from 'react';
import { Heading } from '@ui/Heading';
import { OrderForm } from '@widgets/OrderForm';
import { RemoveFromBasketButton } from '@features/basket';
import { BasketProduct, BasketProductList, type IBasketProduct, useBasket } from '@entities/Basket';

import styles from './widgets.module.scss';

/**
 * Корзина
 * @constructor
 */
const Basket = () => {
  const { isProductBasketList } = useBasket();

  return (
    <div className={styles.basket}>
      <Heading tag={'h2'}>Добавленные товары</Heading>
      {(!isProductBasketList.length) ? (<span>Нет товаров в корзине</span>) : (
        <BasketProductList>
          {isProductBasketList.map((basketProduct: IBasketProduct) => (
            <BasketProduct
              key={basketProduct.id}
              product={basketProduct}
              removeButton={(onRemove) => (<RemoveFromBasketButton onClick={onRemove} product={basketProduct} />)}
            />
          ))}
        </BasketProductList>
      )}
      <OrderForm />
    </div>
  );
};

export { Basket };
