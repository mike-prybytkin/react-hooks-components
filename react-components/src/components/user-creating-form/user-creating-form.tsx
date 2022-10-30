import React, { Component } from 'react';
import TextInput from 'components/form-elements/text-input/text-input';
import DateInput from 'components/form-elements/date-input/date-input';
import Select from 'components/form-elements/select/select';
import Switcher from 'components/form-elements/switcher/switcher';
import Checkbox from 'components/form-elements/checkbox/checkbox';
import FileUpload from 'components/form-elements/file-upload/file-upload';
import { IUserCard } from 'share/types';
import { IUserCreatingFormProps } from './types';

export default class UserCreatingForm extends Component<IUserCreatingFormProps> {
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  selectSalaryRef: React.RefObject<HTMLSelectElement>;
  switcherRef: React.RefObject<HTMLInputElement>;
  checkMailingRef: React.RefObject<HTMLInputElement>;
  addAvatarRef: React.RefObject<HTMLInputElement>;
  userGender: string;
  userName: string;

  constructor(props: IUserCreatingFormProps) {
    super(props);
    this.inputNameRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.selectSalaryRef = React.createRef();
    this.switcherRef = React.createRef();
    this.checkMailingRef = React.createRef();
    this.addAvatarRef = React.createRef();
    this.userGender = '';
    this.userName = '';
  }

  getUserName = () => {
    this.userName = this.inputNameRef?.current?.value ?? '';
  };

  getUserBirthday = () => {
    return this.inputDateRef?.current?.value.split('-').reverse().join('.');
  };

  getUserGender = () => {
    if (this.switcherRef.current?.checked) {
      this.userGender = 'Male';
    } else {
      this.userGender = 'Female';
    }
  };

  getAvatarPhoto = () => {
    if (this.addAvatarRef?.current?.files && this.addAvatarRef?.current?.files?.length > 0) {
      const file = this.addAvatarRef?.current?.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result as string;
        this.addUserInLocalStorage(result);
      };
    } else {
      this.addAvatarRef?.current?.focus();
    }
  };

  addUserInLocalStorage(userAvatar: string) {
    const newUser: IUserCard = {
      name: this.userName,
      gender: this.userGender,
      birthday: this.getUserBirthday() ?? '',
      salary: this.selectSalaryRef?.current?.value ?? '',
      mailing: this.checkMailingRef?.current?.checked ?? true,
      avatarPath: userAvatar,
    };
    this.props.onForm(newUser);
    this.resetForm();
  }

  resetForm() {
    const form: HTMLFormElement | null = document.querySelector('.create-user-form');
    form?.reset();
  }

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.getUserName();
    this.getUserBirthday();
    this.getUserGender();
    this.getAvatarPhoto();
  };

  render() {
    return (
      <form className="create-user-form" onSubmit={this.handleSubmit}>
        <TextInput
          labelType="Name:"
          placeholderText="Your Name"
          minNameLength="2"
          maxNameLength="12"
          required={true}
          inputNameRef={this.inputNameRef}
        />
        <DateInput
          labelType="Birthday:"
          defaultValue="2000-01-01"
          minDate="1922-01-01"
          maxDate="2022-01-01"
          inputDateRef={this.inputDateRef}
        />
        <Select labelType="Your monthly income:" selectSalaryRef={this.selectSalaryRef} />
        <Switcher
          switcherType="Gender:"
          optionOne="Male"
          optionTwo="Femail"
          switcherRef={this.switcherRef}
        />
        <Checkbox labelType="Receive mailing" checkMailingRef={this.checkMailingRef} />
        <FileUpload labelType="Add your photo" addAvatarRef={this.addAvatarRef} />
        <input className="create-user-button" type="submit" value="Create user" />
      </form>
    );
  }
}
