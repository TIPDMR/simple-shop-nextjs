import React from 'react';
import { cleanHtml } from '@shared/lib/utils';

import styles from './entities.module.scss';

interface IReviewCardProps {
  text: string;
}

const ReviewCard = ({ text }: IReviewCardProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: cleanHtml(text) }}
      className={styles['review-card']}
    ></div>
  );
};

export { ReviewCard };
