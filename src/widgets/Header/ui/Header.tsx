import React from 'react';
import styles from './Header.module.scss';
import { Heading } from '@ui/Heading';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Heading textColor={'light'} tag="h1">
        Simple Shop
      </Heading>
    </header>
  );
};
