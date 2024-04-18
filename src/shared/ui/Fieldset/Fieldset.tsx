import React from 'react';
import styles from './shared.module.scss';
import clsx from 'clsx';

interface IFieldsetProps {
  children?: React.ReactNode;
  className?: string;
}

const Fieldset = ({ children, className }: IFieldsetProps) => {
  return (
    <fieldset className={clsx(styles.fieldset, className)}>{children}</fieldset>
  );
};

export { Fieldset };
