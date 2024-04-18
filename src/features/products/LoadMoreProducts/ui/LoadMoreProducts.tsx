'use client';
import React from 'react';
import { Spinner } from '@ui/Spinner';
import styles from './features.module.scss';
import { useLoadMoreProducts } from '@shared/lib/hooks/useLoadMoreProducts';


const LoadMoreProducts = () => {
  const { isLoading, ref } = useLoadMoreProducts();

  return (
    <>
      <div className={styles.loadMoreProducts} ref={ref}>
        {isLoading && <Spinner />}
      </div>
    </>
  );
};

export { LoadMoreProducts };
