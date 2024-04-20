import React from 'react';

import { IProduct, ProductCard } from '@entities/Products';
import { AddToBasketButton, BasketQuantityButton } from '@features/products';

import styles from './entities.module.scss';
import { IBasketProduct } from '@entities/Basket';

interface IProductListProps {
  children?: React.ReactNode;
  products: IProduct[];
  onCheckProductInBasket: (product: IProduct) => IBasketProduct | false;
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
      {
        products?.map((product: IProduct, index) => {
          const isInBasket = onCheckProductInBasket(product);
          return (
            <ProductCard key={index} product={product}>
              {!isInBasket ? (
                <AddToBasketButton product={product} />
              ) : (
                <BasketQuantityButton basketProductQuantity={isInBasket.quantity} basketProductId={isInBasket.id}></BasketQuantityButton>
              )}
            </ProductCard>
          );
        })}
    </div>
  );
};

export { ProductList };
