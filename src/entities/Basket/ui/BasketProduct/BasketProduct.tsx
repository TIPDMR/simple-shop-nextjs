import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { IBasketProduct } from '@entities/Basket';

import styles from './entities.module.scss';

interface IBasketProductProps {
  removeButton?: ReactNode;
  product: IBasketProduct;
  className?: string;
}

/**
 * Карточка товара в корзине
 *
 * @param id
 * @param name
 * @param quantity
 * @param price
 * @param removeButton - кнопка для удаления товара из корзины
 * @param className
 * @param unMount
 * @constructor
 */
const MemoizedBasketProduct = ({ product: { id, name, quantity, price }, removeButton, className }: IBasketProductProps) => {

  /**
   * Форматируем цену из 10000 в 10 000, добавляем разделители разрядов
   *
   * @param price - цена
   * @returns {string}
   */
  function priceFormat(price: number): string {
    return new Intl.NumberFormat('ru-RU').format(price);
  }

  return (
    <div className={clsx(styles.basketProduct, className)}>
      {removeButton && removeButton}
      <span className={styles.basketProduct__name}>{name}</span>
      <span className={styles.basketProduct__count}>{quantity} шт.</span>
      <span className={styles.basketProduct__price}>{priceFormat(parseFloat(price) * quantity)}&#8381;</span>
    </div>
  );
};
const BasketProduct = React.memo(MemoizedBasketProduct);
export { BasketProduct };
