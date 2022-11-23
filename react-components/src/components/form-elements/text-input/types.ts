import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { IUserCreatingForm, FieldName } from 'share/types';

export interface TextInputProps {
  type: string;
  name: FieldName;
  id: string;
  labelType: string;
  placeholderText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  register: UseFormRegister<IUserCreatingForm>;
  validationSchema: {
    required: string;
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
  };
  required: boolean;
}

// type Error = Partial<
//   FieldErrorsImpl<{
//     name: string;
//   }>
// >;

// type Partial<T> = { [P in keyof T]?: T[P] | undefined };
