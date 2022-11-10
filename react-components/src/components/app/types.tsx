import { IProductCard } from 'share/types';

export interface IFetchData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: IProductCard[];
}
