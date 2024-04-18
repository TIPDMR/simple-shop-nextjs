import React from 'react';
import clsx from 'clsx';

import styles from './shared.module.scss';

interface IHeadingProps {
  tag?: 'h1' | 'h2';
  textColor?: 'light' | 'dark';
  children?: React.ReactNode;
  className?: string;
}

const Heading = ({
  children,
  tag: Tag = 'h2',
  textColor = 'dark',
  className,
  ...rest
}: IHeadingProps) => {
  ///const global = clsx(styles.heading, className);
  const tagList = {
    h1: styles.heading_h1,
    h2: styles.heading_h2,
  };

  const colorList = {
    light: styles.heading_textColorLight,
    dark: styles.heading_textColorDark,
  };
  return (
    <Tag
      className={clsx(
        styles.heading,
        tagList[Tag],
        colorList[textColor],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export { Heading };
