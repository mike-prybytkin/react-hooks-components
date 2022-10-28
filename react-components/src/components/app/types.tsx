import { IProductCard } from 'share/types';

export interface IAppState {
  data: IProductCard[];
  isLoading: boolean;
  currentData: IProductCard[];
  fetchError: unknown;
}
