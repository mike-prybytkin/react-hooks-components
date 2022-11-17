import { ReactNode } from 'react';
import { IProductCard } from 'share/types';

export interface StoreProviderProps {
  children: ReactNode;
}

export interface IStoreProviderContext {
  onSearch: (querySearch: string) => void;
  updateQuery: (querySearch: number) => void;
  querySearch: string;
  setQuerySearch: React.Dispatch<React.SetStateAction<string>>;
  queryPage: number;
  setQueryPage: React.Dispatch<React.SetStateAction<number>>;
  allPages: number;
  setAllPages: React.Dispatch<React.SetStateAction<number>>;
  cardsLimit: number;
  data: IProductCard[];
  setData: React.Dispatch<React.SetStateAction<IProductCard[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
