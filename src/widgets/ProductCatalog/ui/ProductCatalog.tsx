'use client';
import React, { useEffect } from 'react';
import { ProductList } from '@entities/Products';

import { LoadMoreProducts } from 'src/features/products/LoadMoreProducts';
import { useBasketStore, useProductsStore } from '@app/store';

import styles from './widgets.module.scss';
import BackendApi from '@shared/api/BackendApi';

const ProductCatalog = () => {
  const addProducts = useProductsStore((state) => state.addProducts);
  const products = useProductsStore((state) => state.products);

  const productsInBasket = useBasketStore((state) => state.products);

  useEffect(() => {
    BackendApi.getProducts({ page: 1, pageSize: 6 })
      .then((res) => {
        return res.data;
      }).then((data) => {
      addProducts(data.products);
    })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className={styles.productCatalog}>
      {products.length ? (
        <>
          <ProductList
            productsInBasket={productsInBasket}
            products={products}
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
