import { UseFormRegister } from 'react-hook-form';
import { IUserCreatingForm, FieldName } from 'share/types';

export interface DateInputProps {
  type: string;
  name: FieldName;
  id: string;
  labelType: string;
  register: UseFormRegister<IUserCreatingForm>;
  defaultValue: string;
  minDate: string;
  maxDate: string;
  required: boolean;
}
