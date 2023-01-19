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

export interface IAppContext {
  onSearch: (querySearch: string) => void;
  updateQuery: (querySearch: number) => void;
  queryPage: number;
  allPages: number;
  cardsLimit: number;
}
