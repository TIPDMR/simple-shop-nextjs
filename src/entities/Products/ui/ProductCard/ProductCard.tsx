import React, { ReactNode } from 'react';

import { IProduct } from '@entities/Products';

import styles from './entities.module.scss';
import { Heading } from '@ui/Heading';
import Image from 'next/image';

interface IProductCardProps {
  product: IProduct;
  children?: ReactNode;
}

const MemoizedProductCard = ({ product, children }: IProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <Image
        className={styles.productCard__image}
        src={product.image_url}
        alt={product.title}
        width={200}
        height={200}
      />
      <Heading
        data-full-text={product.title}
        className={styles.productCard__title}
        tag="h2"
      >
        {product.title}
      </Heading>
      <span
        data-full-text={product.description}
        className={styles.productCard__description}
      >
        {product.description}
      </span>
      <span className={styles.productCard__price}>
        Цена {product.price}&#8381;
      </span>
      {children}
    </div>
  );
};
const ProductCard = React.memo(MemoizedProductCard);
export { ProductCard };
