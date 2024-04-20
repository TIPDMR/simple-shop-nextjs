import React from 'react';
import clsx from 'clsx';
import { IBasketProduct } from '@entities/Basket';

import styles from './entities.module.scss';

interface IBasketProductProps {
  removeButton: (onRemove: () => void) => React.ReactNode;
  product: IBasketProduct;
  className?: string;
}

/**
 * Карточка товара в корзине
 *
 * @param product
 * @param className
 * @param removeButton - Метод возвращающей JSX элемент для кнопки удаления товара из корзины.
 * Функция принимает колбэк для обработки события нажатия на кнопку удаления.
 * @constructor
 */
const MemoizedBasketProduct = ({ product, removeButton, className }: IBasketProductProps) => {
  const { id, name, quantity, price } = product;
  const [hidden, setHidden] = React.useState(false);

  /**
   * Форматируем цену из 10000 в 10 000, добавляем разделители разрядов
   *
   * @param price - цена
   * @returns {string}
   */
  function priceFormat(price: number): string {
    return new Intl.NumberFormat('ru-RU').format(price);
  }

  /**
   * Метод который после нажатия на удаление товара из корзины,
   * сперва навешает анимацию, сделает задержку и удалит товар.
   */
  const handleClick = async () => {
    setHidden(true);
    await new Promise((resolve) => setTimeout(resolve, .3 * 1000));
  };

  return (
    <div className={clsx(styles.basketProduct, className, hidden && styles.basketProduct__fadeOut)}>
      {removeButton(handleClick)}
      <span className={styles.basketProduct__name}>{name}</span>
      <span className={styles.basketProduct__count}>{quantity} шт.</span>
      <span className={styles.basketProduct__price}>{priceFormat(parseFloat(price) * quantity)}&#8381;</span>
    </div>
  );
};
const BasketProduct = React.memo(MemoizedBasketProduct);
export { BasketProduct };
