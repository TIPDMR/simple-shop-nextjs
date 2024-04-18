import React from 'react';
import styles from './shared.module.scss';

interface IMainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainerProps) => {
  return <main className={styles.mainContainer}>{children}</main>;
};

export { MainContainer };
