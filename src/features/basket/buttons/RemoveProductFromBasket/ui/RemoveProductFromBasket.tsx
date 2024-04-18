import React from 'react';
import { Button } from '@ui/Button';
import styles from './features.module.scss';
import { useBasket } from '@shared/lib/hooks';
import { IBasketProduct } from '@entities/Basket';

interface IRemoveProductToBasketProps {
  product: IBasketProduct;
}

const RemoveProductFromBasket = ({ product }: IRemoveProductToBasketProps) => {
  const { onRemoveProductToBasket } = useBasket();
  return (
    <Button
      size={'auto'}
      bgColor={'transparent'}
      onClick={() => onRemoveProductToBasket(product)}
      classNameButton={styles.deleteProductBasketButton}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.deleteProductBasketButton__image}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </Button>
  );
};

export { RemoveProductFromBasket };
