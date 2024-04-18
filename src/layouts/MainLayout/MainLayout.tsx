import React, { FC } from 'react';
import styles from './MainLayout.module.scss';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return <div className={styles['main-layout']}>{children}</div>;
};

export default MainLayout;
