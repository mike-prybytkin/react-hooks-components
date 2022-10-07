import { ICard } from 'share/types';

export interface ILiveSearchState {
  value: string;
}

export interface IProps {
  data: ICard[];
  isLoading: boolean;
}
