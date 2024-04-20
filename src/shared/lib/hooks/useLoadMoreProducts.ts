import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LoadMoreCallback {
  (): Promise<void>;
}

export const useLoadMoreProducts = (loadMoreCallback: LoadMoreCallback) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const loadMoreProducts = async () => {
      setIsLoading(true);
      await delay(1000);
      try {
        await loadMoreCallback();
      } catch (e) {
        throw new Error('Ошибка загрузки товаров');
      }
      setIsLoading(false);
    };

    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return { isLoading, ref };
};
