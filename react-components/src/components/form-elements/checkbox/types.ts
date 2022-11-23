import { UseFormRegister } from 'react-hook-form';
import { IUserCreatingForm, FieldName } from 'share/types';

export interface CheckboxProps {
  labelType: string;
  id: string;
  name: FieldName;
  register: UseFormRegister<IUserCreatingForm>;
  required: boolean;
}
