'use server';
import BackendAPI from '@shared/api/BackendApi';

/**
 * Получение списка отзывов с сервера через API
 */
export async function getReviews() {
  return await BackendAPI.getReviews();
}
