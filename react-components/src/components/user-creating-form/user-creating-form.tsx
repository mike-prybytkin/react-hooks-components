import React, { Component } from 'react';
import TextInput from 'components/form-elements/text-input/text-input';
import DateInput from 'components/form-elements/date-input/date-input';
import Select from 'components/form-elements/select/select';
import Switcher from 'components/form-elements/switcher/switcher';
import Checkbox from 'components/form-elements/checkbox/checkbox';
import FileUpload from 'components/form-elements/file-upload/file-upload';

export default class UserCreatingForm extends Component<unknown> {
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  selectSalaryRef: React.RefObject<HTMLSelectElement>;
  switcherRef: React.RefObject<HTMLInputElement>;
  checkMailingRef: React.RefObject<HTMLInputElement>;
  addAvatarRef: React.RefObject<HTMLInputElement>;
  userGender: string;

  constructor(props: unknown) {
    super(props);
    this.inputNameRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.selectSalaryRef = React.createRef();
    this.switcherRef = React.createRef();
    this.checkMailingRef = React.createRef();
    this.addAvatarRef = React.createRef();
    this.userGender = '';
  }

  getUserName = () => {
    console.log(this.inputNameRef?.current?.value);
    if (this.inputNameRef.current) {
      this.inputNameRef.current.value = '';
    }
  };

  getUserBirthday = () => {
    console.log(this.inputDateRef?.current?.value);
    // this.birthdayInput.focus();
    // this.birthdayInput.value = '';
  };

  getUserSalary = () => {
    console.log(this.selectSalaryRef?.current?.value);
    // this.selectSalary.focus();
    // this.selectSalary.value = '';
  };

  getUserGender = () => {
    if (this.switcherRef.current?.checked) {
      this.userGender = 'Male';
    } else {
      this.userGender = 'Female';
    }
    console.log(this.userGender);
  };

  checkReceiveMailing = () => {
    console.log(this.checkMailingRef?.current?.checked);
  };

  getAvatarPhoto = () => {
    if (this.addAvatarRef?.current?.files) {
      const file = this.addAvatarRef?.current?.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result as string;
        console.log(result);
      };
    }
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.getUserName();
    this.getUserBirthday();
    this.getUserSalary();
    this.getUserGender();
    this.checkReceiveMailing();
    this.getAvatarPhoto();
  };

  render() {
    return (
      <form className="create-user-form" onSubmit={this.handleSubmit}>
        <TextInput
          labelType="Name:"
          placeholderText="Your Name"
          minNameLength="2"
          maxNameLength="20"
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
