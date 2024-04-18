import React from 'react';
import { type IReview, ReviewList } from '@entities/Reviews';

import styles from './widget.module.scss';
import BackendApi from '@shared/api/BackendApi';


export async function Reviews() {
  const response = await BackendApi.getReviews();
  const reviews: IReview[] = response.data;

  return (
    <div className={styles.reviews}>
      <ReviewList reviews={reviews} />
    </div>
  );
}
