import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, FETCH_COINS_ENDPOINT, FETCH_ICONS_ENDPOINT } from '../../constants/apiEndpoints';
import { ICoin } from '../../types/name';
export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_COINS_ENDPOINT,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query<ICoin[], { offset: number }>({
      query: ({ offset }) => `?offset=${offset}&limit=20`,
      transformResponse: async (response: { data: ICoin[] }) => {
        return response.data.map((item: ICoin) => {
          item.imageUrl = `${FETCH_ICONS_ENDPOINT}${item.symbol.toLowerCase()}@2x.png`;
          return item;
        });
      },
    }),
    getPopularCoins: builder.query<ICoin[], void>({
      query: () => `?limit=3`,
      transformResponse: async (response: { data: ICoin[] }) => {
        return response.data.map((item: ICoin) => {
          item.imageUrl = `${FETCH_ICONS_ENDPOINT}${item.symbol.toLowerCase()}@2x.png`;
          return item;
        });
      },
    }),

    getAddedCoins: builder.query<ICoin[], string>({
      query: (ids) => `?ids=${ids}`,
      transformResponse: async (response: { data: ICoin[] }) => {
        return response.data;
      },
    }),

    getCoinInterval: builder.query<ICoin[], { id: string; interval: string }>({
      query: ({ id, interval }) => `/${id}/history?interval=${interval}`,
      transformResponse: async (response: { data: ICoin[] }) => {
        return response.data; // Возвращаем данные из ответа
      },
    }),

    getCoin: builder.query<ICoin, string>({
      query: (id) => `/${id}`,
      transformResponse: async (response: { data: ICoin }) => {
        if (response.data) {
          const item = response.data;
          item.imageUrl = `${FETCH_ICONS_ENDPOINT}${item.symbol.toLowerCase()}@2x.png`;
          return item; // Returns ICoin
        }
        throw new Error('Invalid response data');
      },
    }),
    searchCoins: builder.query<ICoin[], string>({
      query: (id) => `?search=${id}`,
      transformResponse: async (response: { data: ICoin[] }) => {
        return response.data.map((item: ICoin) => {
          item.imageUrl = `${FETCH_ICONS_ENDPOINT}${item.symbol.toLowerCase()}@2x.png`;
          return item;
        });
      },
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetPopularCoinsQuery,
  useGetAddedCoinsQuery,
  useGetCoinIntervalQuery,
  useGetCoinQuery,
  useSearchCoinsQuery,
} = coinsApi;
