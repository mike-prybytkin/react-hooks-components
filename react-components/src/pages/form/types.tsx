import { IUserCard } from 'share/types';

export type IFormProps = { heading: string };

export interface IFormState {
  userCards: IUserCard[];
}
