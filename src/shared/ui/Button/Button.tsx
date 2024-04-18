'use client';
import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './shared.module.scss';

interface IAppButtonProps {
  children?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  classNameButton?: string;
  size?: 'xs' | 's';
  borderRadius?: 'xs';
  bgColor?: 'dark' | 'light' | 'transparent';
  textColor?: 'dark' | 'light';
  disabled?: boolean;
}

/**
 * Компонент кнопки для приложения.
 *
 * @param children - Дочерние элементы кнопки, например, текст или иконка.
 * @param type - Тип кнопки (button, reset, submit).
 * @param onClick - Функция обратного вызова, вызываемая при клике на кнопку.
 * @param classNameButton - Дополнительный класс для кнопки.
 * @param size - Размер кнопки.
 * @param borderRadius - Закругление границ кнопки.
 * @param bgColor - Цвет кнопки.
 * @param textColor - Цвет кнопки.
 * @param disabled - Активность кнопки.
 */
const Button: React.FC<IAppButtonProps> = ({
  children,
  type = 'button',
  onClick,
  size = 'xs',
  classNameButton,
  borderRadius = 'xs',
  bgColor = 'dark',
  textColor = 'light',
  disabled = false,
}) => {
  /**
   * Общий класс для стилизации кнопок.
   */
  const generalClass = styles.button;
  const disabledClass = disabled && styles.button_disabled;

  /**
   * Размеры кнопок.
   */
  const sizeList = {
    xs: styles.button_size_xs,
    s: styles.button_size_s,
  };

  /**
   * Типы кнопок.
   */
  const borderRadiusList = {
    xs: styles.button_borderRadius,
  };

  /**
   * Цвета для кнопок.
   */
  const bgColorList = {
    dark: styles.button_bgColorDark,
    light: styles.button_bgColorLight,
    transparent: styles.button_bgColorTransparent,
  };

  /**
   * Цвета шрифтов.
   */
  const textColorList = {
    light: styles.button_textColorLight,
    dark: styles.button_textColorLight,
  };

  /**
   * Обработчик клика.
   */
  const handlerClick = () => typeof onClick === 'function' && onClick();

  return (
    <button
      className={clsx(
        generalClass,
        sizeList[size],
        borderRadiusList[borderRadius],
        bgColorList[bgColor],
        textColorList[textColor],
        disabledClass,
        classNameButton
      )}
      type={type}
      onClick={handlerClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
