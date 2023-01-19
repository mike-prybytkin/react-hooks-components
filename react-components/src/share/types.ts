export interface IProductCard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IUserCard {
  name: string;
  birthday: string;
  salary: string;
  gender: string;
  mailing: boolean;
  avatarPath?: string;
}

export interface IUserCreatingForm {
  name: string;
  birthday: string;
  salary: string;
  gender: string;
  mailing: boolean;
  avatarPath: FileList;
}

export type FieldName = keyof IUserCreatingForm;
