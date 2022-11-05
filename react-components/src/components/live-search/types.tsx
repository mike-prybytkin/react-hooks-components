import { IProductCard } from 'share/types';

export interface LiveSearchState {
  value: string;
}

export interface LiveSearchProps {
  cards: IProductCard[];
  onSearch: (querySearch: string) => void;
  placeholderText: string;
}
