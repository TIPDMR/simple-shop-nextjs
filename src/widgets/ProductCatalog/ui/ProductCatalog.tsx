'use client';
import React, { useEffect } from 'react';
import BackendApi from '@shared/api/BackendApi';
import { useBasket, useProduct } from '@shared/lib/hooks';
import { ProductList } from '@entities/Products';
import { LoadMoreProducts } from '@features/products/LoadMoreProducts';

import styles from './widgets.module.scss';


/**
 * Каталог товаров
 * @constructor
 */
const ProductCatalog = () => {
  const { onAddProducts, isProductsList } = useProduct();
  const { onCheckProductInBasket } = useBasket();

  useEffect(() => {
    BackendApi.getProducts({ page: 1, pageSize: Number(process.env.PAGE_SIZE) || 6 })
      .then((res) => {
        return res.data;
      }).then((data) => {
      onAddProducts(data.products);
    })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className={styles.productCatalog}>
      {isProductsList.length ? (
        <>
          <ProductList
            onCheckProductInBasket={onCheckProductInBasket}
            products={isProductsList}
          ></ProductList>
          <LoadMoreProducts />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export { ProductCatalog };
