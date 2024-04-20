'use client';
import React from 'react';
import { Spinner } from '@ui/Spinner';
import styles from './features.module.scss';
import { useLoadMoreProducts } from '@shared/lib/hooks/useLoadMoreProducts';
import { useProduct } from '@shared/lib/hooks';

const LoadMoreProducts = () => {
  const { onLoadMoreProducts } = useProduct();
  const { isLoading, ref } = useLoadMoreProducts(onLoadMoreProducts);

  return (
    <>
      <div className={styles.loadMoreProducts} ref={ref}>
        {isLoading && <Spinner />}
      </div>
    </>
  );
};

export { LoadMoreProducts };
