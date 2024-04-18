import React, { ReactNode } from 'react';

import styles from './entities.module.scss';

interface IBasketProductListProps {
  children: ReactNode;
}

const MemoizedBasketProductList = ({ children }: IBasketProductListProps) => {
  return (
    <div className={styles.basketProductList}>
      {children}
    </div>
  );
};
const BasketProductList = React.memo(MemoizedBasketProductList);
export { BasketProductList };
