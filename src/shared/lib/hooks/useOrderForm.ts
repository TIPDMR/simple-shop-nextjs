import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formatPhoneNumber } from '@shared/lib/utils';
import type { IBasketProductsMock } from '@entities/Basket';
import BackendApi from '@shared/api/BackendApi';

interface IOrderForm {
  phone: string;
}

const useOrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    setError,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IOrderForm>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<IOrderForm> = async (data) => {
    setIsLoading(true);
    const formatedPhone = formatPhoneNumber(data.phone);
    if (!formatedPhone) {
      setError('phone', {
        type: 'custom',
        message: 'Неверный формат телефона',
      });
      setIsLoading(false);
      return;
    }

    // const res = await BackendApi.setOrder({
    //   phone: formatedPhone,
    //   cart: mockBasketItems.cart,
    // });
    // if (res && res.status === 401) {
    //   setError('phone', {
    //     type: 'custom',
    //     message: 'Пользователь не найден или пароль введен неверно',
    //   });
    // } else if (res && (res.status === 200 || res.status === 201)) {
    //   console.log('Заказ отправлен');
    //   // router.push('/');
    // } else {
    //   setError('phone', {
    //     type: 'custom',
    //     message: 'Ошибка сервера',
    //   });
    // }
    setIsLoading(false);
  };

  return {
    isLoading,
    onSubmit,
    errors,
    register,
    handleSubmit,
  };
};

export { useOrderForm };
