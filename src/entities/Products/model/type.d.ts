export interface IProduct {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: string;
}

export interface IProductPage {
  page: number;
  amount: number;
  total: number;
  products: IProduct[];
}

export interface IProductsStore {
  products: IProduct[];
  page: number;
  loading: boolean;
  error: string | null;
  addProducts: (products: IProduct[]) => void;
  setPage: (page: number) => void;
}
