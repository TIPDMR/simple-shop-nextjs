import React, { ChangeEvent, forwardRef, Ref } from 'react';
import clsx from 'clsx';
import { PatternFormat } from 'react-number-format';
import styles from './shared.module.scss';

interface IInputTelProps {
  name: string;
  format?: string;
  mask?: string;
  allowEmptyFormatting?: boolean;
  className?: string;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputTel = forwardRef(
  (
    {
      name,
      className,
      format = '+7 (###) ### ##-##',
      mask = '_',
      required,
      value,
      onChange,
      defaultValue,
      ...props
    }: IInputTelProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const defaultClassName = styles.inputTel;

    return (
      <PatternFormat
        getInputRef={ref}
        value={value}
        defaultValue={defaultValue}
        id={name}
        // type={type}
        name={name}
        onChange={onChange}
        className={clsx(defaultClassName, className)}
        required={required}
        format={format}
        allowEmptyFormatting
        mask={mask}
        {...props}
      />
    );
  }
);

InputTel.displayName = 'InputText';

export { InputTel };
