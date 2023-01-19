import { UseFormRegister } from 'react-hook-form';
import { IUserCreatingForm, FieldName } from 'share/types';

export interface FileUploadProps {
  labelType: string;
  id: string;
  name: FieldName;
  register: UseFormRegister<IUserCreatingForm>;
  required: boolean;
  type: string;
  validationSchema: { required: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
}
