import axios, { AxiosResponse } from 'axios';
import { IBasket } from '@entities/Basket';

const BACKEND_API_URL = process.env.BACKEND_API_URL || '//localhost:3000/api';


class Api {

  protected _headers: Record<string, string>;
  protected _serverUrl: string;

  public constructor({ serverUrl, headers }: IApiConfig) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  }

  public async getReviews(): Promise<AxiosResponse> {
    'use server';
    try {
      return await axios.get(`${this._serverUrl}/reviews`, {
        headers: { ...this._headers },
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async getProducts(
    {
      page,
      pageSize,
    }: {
      page: number,
      pageSize: number,
    },
  ): Promise<AxiosResponse> {
    'use server';
    try {
      return await axios.get(`${this._serverUrl}/products`, {
        params: {
          page,
          page_size: pageSize,
        },
        headers: { ...this._headers },
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async setOrder({ phone, cart }: IBasket): Promise<AxiosResponse> {
    try {
      return await axios.post(
        `${this._serverUrl}/order`,
        { phone, cart },
        {
          headers: { ...this._headers },
        },
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

const BackendApi = new Api({
  serverUrl: BACKEND_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default BackendApi;
