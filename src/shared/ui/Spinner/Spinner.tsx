import React from 'react';
import styles from './shared.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner} role="status">
      <span>Loading...</span>
    </div>
  );
};

export { Spinner };
