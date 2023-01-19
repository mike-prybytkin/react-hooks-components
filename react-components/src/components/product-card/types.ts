import { IProductCard } from 'share/types';

export interface ProductCardProps {
  card: IProductCard;
  buttonText: string;
}

export type IClikedCard = Pick<
  IProductCard,
  'name' | 'image' | 'status' | 'species' | 'type' | 'gender' | 'location'
>;
