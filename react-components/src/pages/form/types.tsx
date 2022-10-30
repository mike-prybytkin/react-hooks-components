import { IUserCard } from 'share/types';

export type IFormProps = { heading: string; noCreatedUserMessage: string };

export interface IFormState {
  userCards: IUserCard[];
}
