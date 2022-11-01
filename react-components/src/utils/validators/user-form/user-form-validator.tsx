import { ValidationData } from './types';

export const userFormValidator = (userData: ValidationData) => {
  if (!userData.name) {
    return 'name';
  }

  if (!userData.avatarPath) {
    return 'avatarPath';
  }

  return '';
};
