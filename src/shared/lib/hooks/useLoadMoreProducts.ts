import { useEffect, useState } from 'react';
import { IProductPage } from '@entities/Products';
import { useInView } from 'react-intersection-observer';
import { useProductsStore } from '@app/store/productsStore';
import BackendApi from '@shared/api/BackendApi';

export const useLoadMoreProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const addProducts = useProductsStore((state) => state.addProducts);
  const setPage = useProductsStore((state) => state.setPage);
  const page = useProductsStore((state) => state.page);
  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreProducts = async () => {
    setIsLoading(true);
    try {
      await delay(2000);
      const nextPage = page + 1;
      const response = await BackendApi.getProducts({
        page: nextPage,
        pageSize: 6,
      });
      const responsePage: IProductPage = response.data;
      if (responsePage?.products) {
        addProducts(responsePage.products);
        setPage(nextPage);
      }
    } catch (e) {
      throw new Error('Ошибка');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return { isLoading, ref };
};
