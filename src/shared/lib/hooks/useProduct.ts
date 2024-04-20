import { useProductsStore } from '@app/store';
import BackendApi from '@shared/api/BackendApi';
import { IProductPage } from '@entities/Products';

interface LoadMoreCallback {
  (): Promise<void>;
}

/**
 * Хук для работы с каталогом товаров
 */
export const useProduct = () => {
  const addProducts = useProductsStore((state) => state.addProducts);
  const products = useProductsStore((state) => state.products);
  const setPage = useProductsStore((state) => state.setPage);
  const page = useProductsStore((state) => state.page);

  /**
   * Метод для загрузки новых продуктов с сервера
   * И добавлением в хранилище
   */
  const loadMoreProducts: LoadMoreCallback = async () => {
    try {
      const response = await BackendApi.getProducts({
        page: page + 1,
        pageSize: 6,
      });
      const responsePage: IProductPage = response.data;
      if (responsePage?.products && responsePage?.products.length > 0) {
        setPage(page + 1);
        addProducts(responsePage.products);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return {
    onAddProducts: addProducts,
    isProductsList: products,
    isPage: page,
    onLoadMoreProducts: loadMoreProducts,
  };
};
