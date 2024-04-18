import React from 'react';
import { Button } from '@ui/Button';
import { Form } from '@ui/Form';
import { InputTel } from '@ui/InputTel';
import { Fieldset } from '@ui/Fieldset';
import { useOrderForm } from '@shared/lib/hooks';

import styles from './widgets.module.scss';

const OrderForm = () => {
  const { isLoading, onSubmit, errors, register, handleSubmit } =
    useOrderForm();

  return (
    <Form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
      <Fieldset>
        <InputTel
          defaultValue={'711111111111'}
          {...register('phone', {
            required: 'Телефон обязателен',
            pattern: {
              value: /^\+7 \(\d{3}\) \d{3} \d{2}-\d{2}$/,
              message: 'Введите телефон в формате +7 (123) 456 78-90',
            },
          })}
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors?.phone?.message && <div>{errors.phone.message}</div>}
      </Fieldset>
      <Button
        textColor={'light'}
        bgColor={'dark'}
        disabled={isLoading}
        type="submit"
      >
        Заказать
      </Button>
    </Form>
  );
};

export { OrderForm };
