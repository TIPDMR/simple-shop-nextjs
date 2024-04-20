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
  /**
   * Форматируем цену из 10000 в 10 000, добавляем разделители разрядов
   *
   * @param price - цена
   * @returns {string}
   */
  function priceFormat(price: number) {
    return new Intl.NumberFormat('ru-RU').format(price);
  }

  return (
    <div className={styles.basketProduct}>
      {removeButton && removeButton}
      <span className={styles.basketProduct__name}>{name}</span>
      <span className={styles.basketProduct__count}>{quantity} шт.</span>
      <span className={styles.basketProduct__price}>{priceFormat(parseFloat(price) * quantity)}&#8381;</span>
    </div>
  );
};
const BasketProduct = React.memo(MemoizedBasketProduct);
export { BasketProduct };
