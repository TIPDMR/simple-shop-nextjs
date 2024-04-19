import React from 'react';

interface IChangeQuantityOfProductInBasketProps {
  children?: React.ReactNode;
}

const BasketQuantityButton = ({ children }: IChangeQuantityOfProductInBasketProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export { BasketQuantityButton };
