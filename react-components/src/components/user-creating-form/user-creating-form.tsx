import React, { Component } from 'react';
import TextInput from 'components/form-elements/text-input/text-input';
import DateInput from 'components/form-elements/date-input/date-input';
import Select from 'components/form-elements/select/select';
import Switcher from 'components/form-elements/switcher/switcher';
import Checkbox from 'components/form-elements/checkbox/checkbox';
import FileUpload from 'components/form-elements/file-upload/file-upload';
import { IUserCard } from 'share/types';
import { UserCreatingFormProps } from './types';
import mockText from 'mocks/text';
import { userFormValidator } from 'utils/validators/user-form/user-form-validator';

const initialState: IUserCard = {
  name: '',
  gender: '',
  birthday: '',
  salary: '',
  mailing: true,
  avatarPath: '',
};

export default class UserCreatingForm extends Component<UserCreatingFormProps, IUserCard> {
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  selectSalaryRef: React.RefObject<HTMLSelectElement>;
  switcherRef: React.RefObject<HTMLInputElement>;
  checkMailingRef: React.RefObject<HTMLInputElement>;
  addAvatarRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: UserCreatingFormProps) {
    super(props);
    this.inputNameRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.selectSalaryRef = React.createRef();
    this.switcherRef = React.createRef();
    this.checkMailingRef = React.createRef();
    this.addAvatarRef = React.createRef();
    this.formRef = React.createRef();
    this.state = initialState;
  }

  getAvatarPhoto = () => {
    if (this.addAvatarRef?.current?.files && this.addAvatarRef?.current?.files?.length > 0) {
      const file = this.addAvatarRef?.current?.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result as string;

        this.setState({
          avatarPath: result,
        });
      };
    }
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.getAvatarPhoto();
    this.setState({
      name: this.inputNameRef?.current?.value ?? '',
      gender: this.switcherRef.current?.checked ? 'Male' : 'Femail',
      birthday: this.inputDateRef?.current?.value.split('-').reverse().join('.') ?? '',
      salary: this.selectSalaryRef?.current?.value ?? '',
      mailing: this.checkMailingRef?.current?.checked ?? true,
    });
  };

  focusOnInvalidComponent(nameOfProp: string) {
    switch (nameOfProp) {
      case 'name':
        this.inputNameRef?.current?.focus();
        break;

      case 'avatarPath':
        this.addAvatarRef?.current?.focus();
        break;
    }
  }

  componentDidUpdate(prevProps: UserCreatingFormProps, prevState: IUserCard) {
    if (prevState !== this.state) {
      const isValid = userFormValidator({
        name: this.state.name,
        avatarPath: this.state.avatarPath,
      });

      if (!isValid) {
        this.props.onForm(this.state);
        this.formRef.current?.reset();
        this.setState(initialState);
      } else {
        this.focusOnInvalidComponent(isValid);
      }
    }
  }

  render() {
    return (
      <form className="create-user-form" onSubmit={this.handleSubmit} ref={this.formRef}>
        <TextInput
          labelType={mockText.labelUserName}
          placeholderText={mockText.placeholderUserName}
          minTextLength="2"
          maxTextLength="12"
          required={true}
          inputTextRef={this.inputNameRef}
        />
        <DateInput
          labelType={mockText.labelUserBirthday}
          defaultValue="2000-01-01"
          minDate="1922-01-01"
          maxDate="2022-01-01"
          inputDateRef={this.inputDateRef}
        />
        <Select labelType={mockText.labelUserSalary} selectRef={this.selectSalaryRef} />
        <Switcher
          switcherType={mockText.switcherGender}
          optionOne={mockText.switcherGenderMale}
          optionTwo={mockText.switcherGenderFemale}
          switcherRef={this.switcherRef}
        />
        <Checkbox labelType={mockText.labelUserMailing} checkboxRef={this.checkMailingRef} />
        <FileUpload labelType={mockText.labelFileUpload} fileUploadRef={this.addAvatarRef} />
        <input className="create-user-button" type="submit" value={mockText.createUserButton} />
      </form>
    );
  }
}
