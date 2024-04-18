import React from 'react';
import { IProduct } from '@entities/Products';
import { Button } from '@ui/Button';
import styles from './features.module.scss';
import { useBasket } from '@entities/Basket/model/hooks';

interface IAddProductBasketProps {
  product: IProduct;
}

const AddProductBasketButton = ({ product }: IAddProductBasketProps) => {
  const { onAddProductToBasket } = useBasket();

  return (
    <Button
      onClick={() => onAddProductToBasket(product)}
      classNameButton={styles.addProductBasketButton}
    >
      {' '}
      Купить{' '}
    </Button>
  );
};

export { AddProductBasketButton };
