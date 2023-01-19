import { UseFormRegister } from 'react-hook-form';
import { IUserCreatingForm, FieldName } from 'share/types';

export interface SelectProps {
  labelType: string;
  id: string;
  children: JSX.Element | JSX.Element[];
  name: FieldName;
  register: UseFormRegister<IUserCreatingForm>;
  required: boolean;
}
