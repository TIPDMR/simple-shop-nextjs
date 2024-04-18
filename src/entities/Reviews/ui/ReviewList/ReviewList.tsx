'use client';
import React from 'react';
import { Swiper as SwiperSlider, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { IReview, ReviewCard } from '@entities/Reviews';

import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.scss';

const ReviewList = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <SwiperSlider
      slidesPerView={2}
      spaceBetween={'19px'}
      loop={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      breakpoints={{ 320: { slidesPerView: 1 }, 728: { slidesPerView: 2 } }}
    >
      {reviews?.map(({ text }: IReview, index) => (
        <SwiperSlide key={index}>
          <ReviewCard text={text}></ReviewCard>
        </SwiperSlide>
      ))}
    </SwiperSlider>
  );
};

export { ReviewList };
