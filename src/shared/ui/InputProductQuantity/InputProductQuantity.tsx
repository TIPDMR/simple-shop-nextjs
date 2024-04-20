import React, { ChangeEvent, forwardRef, Ref } from 'react';
import clsx from 'clsx';

import styles from './shared.module.scss';
import { NumericFormat } from 'react-number-format';

interface IInputProps {
  className?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputProductQuantity = forwardRef((
  {
    name,
    className,
    placeholder,
    required,
    value,
    onChange,
    ...props
  }: IInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <NumericFormat
      getInputRef={ref}
      value={value}
      id={name}
      name={name}
      onChange={onChange}
      className={clsx(styles.input, className)}
      placeholder={placeholder}
      required={required}
      isAllowed={values => false}
      // isAllowed={(values) => {
      //   const { floatValue } = values;
      //   return !!floatValue && floatValue > 0;
      // }}
      {...props}
    />
  );
});
InputProductQuantity.displayName = 'InputProductQuantity';
export { InputProductQuantity };
