import { ICard } from 'share/types';

export interface ILiveSearchState {
  value: string;
}

export interface ILiveSearchProps {
  data: ICard[];
  isLoading: boolean;
}
