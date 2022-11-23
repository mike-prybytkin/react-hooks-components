import { UseFormRegister } from 'react-hook-form';
import { IUserCreatingForm, FieldName } from 'share/types';

export interface SwitcherProps {
  switcherType: string;
  optionOne: string;
  optionTwo: string;
  idRadioOne: string;
  idRadioTwo: string;
  name: FieldName;
  register: UseFormRegister<IUserCreatingForm>;
  required: boolean;
}
