import React from 'react';

import styles from './entities.module.scss';
import { IProduct, ProductCard } from '@entities/Products';
import { AddProductToBasketButton } from '@features/basket';
import { IBasketProduct } from '@entities/Basket';

interface IProductListProps {
  children?: React.ReactNode;
  products: IProduct[];
  productsInBasket: IBasketProduct[];
}

const ProductList = ({ products, productsInBasket }: IProductListProps) => {
  const inBasket = (product: IProduct) => {
    return (
      productsInBasket.some(
        (productInBasket) => productInBasket.id === product.id,
      ) || false
    );
  };
  return (
    <div className={styles.productList}>
      {products?.map((product: IProduct, index) => (
        <ProductCard key={index} product={product}>
          {!inBasket(product) ? (
            <AddProductToBasketButton product={product} />
          ) : (
            <></>
          )}
        </ProductCard>
      ))}
    </div>
  );
};

export { ProductList };
