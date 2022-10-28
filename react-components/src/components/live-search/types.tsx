import { IProductCard } from 'share/types';

export interface ILiveSearchState {
  value: string;
}

export interface ILiveSearchProps {
  cards: IProductCard[];
  onSearch: (cards: IProductCard[]) => void;
  placeholderText: string;
}
