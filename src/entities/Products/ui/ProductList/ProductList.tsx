import React from 'react';

import { IProduct, ProductCard } from '@entities/Products';
import { AddToBasketButton, BasketQuantityButton } from '@features/products';

import styles from './entities.module.scss';

interface IProductListProps {
  children?: React.ReactNode;
  products: IProduct[];
  onCheckProductInBasket: (product: IProduct) => boolean;
}

/**
 * Вывод товара на страницу
 * @param products - список товаров
 * @param onCheckProductInBasket - функция для проверки находится ли товар в корзине
 * @constructor
 */
const ProductList = ({ products, onCheckProductInBasket }: IProductListProps) => {

  return (
    <div className={styles.productList}>
      {products?.map((product: IProduct, index) => (
        <ProductCard key={index} product={product}>
          {!onCheckProductInBasket(product) ? (
            <AddToBasketButton product={product} />
          ) : (
            <BasketQuantityButton></BasketQuantityButton>
          )}
        </ProductCard>
      ))}
    </div>
  );
};

export { ProductList };
