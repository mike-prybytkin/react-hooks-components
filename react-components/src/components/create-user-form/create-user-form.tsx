import React, { Component } from 'react';
import TextInput from 'components/form-elements/text-input/text-input';
import DateInput from 'components/form-elements/date-input/date-input';
import Select from 'components/form-elements/select/select';
import Switcher from 'components/form-elements/switcher/switcher';
import Checkbox from 'components/form-elements/checkbox/checkbox';

export default class CreateUserForm extends Component<unknown> {
  nameTextInput!: HTMLInputElement | null;
  birthdayInput!: HTMLInputElement | null;
  selectSalary!: HTMLSelectElement | null;
  switcherGender!: HTMLInputElement | null;
  checkMailing!: HTMLInputElement | null;

  inputNameRef: React.LegacyRef<HTMLInputElement> | undefined;
  inputDateRef: React.LegacyRef<HTMLInputElement> | undefined;
  selectSalaryRef: React.LegacyRef<HTMLSelectElement> | undefined;
  switcherRef: React.LegacyRef<HTMLInputElement> | undefined;
  checkMailingRef: React.LegacyRef<HTMLInputElement> | undefined;

  userGender: string;

  constructor(props: unknown) {
    super(props);
    this.inputNameRef = (element) => (this.nameTextInput = element);
    this.inputDateRef = (element) => (this.birthdayInput = element);
    this.selectSalaryRef = (element) => (this.selectSalary = element);
    this.switcherRef = (element) => (this.switcherGender = element);
    this.userGender = '';
    this.checkMailingRef = (element) => (this.checkMailing = element);
  }

  getUserName = () => {
    if (this.nameTextInput) {
      console.log(this.nameTextInput.value);
      // this.nameTextInput.focus();
      // this.nameTextInput.value = '';
    }
  };

  getUserBirthday = () => {
    if (this.birthdayInput) {
      console.log(this.birthdayInput.value);
      // this.birthdayInput.focus();
      // this.birthdayInput.value = '';
    }
  };

  getUserSalary = () => {
    if (this.selectSalary) {
      console.log(this.selectSalary.value);
      // this.selectSalary.focus();
      // this.selectSalary.value = '';
    }
  };

  getUserGender = () => {
    if (this.switcherGender?.checked) {
      this.userGender = 'Male';
    } else {
      this.userGender = 'Female';
    }
    console.log(this.userGender);
  };

  checkReceiveMailing = () => {
    console.log(this.checkMailing?.checked);
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.getUserName();
    this.getUserBirthday();
    this.getUserSalary();
    this.getUserGender();
    this.checkReceiveMailing();
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
        <input className="create-user-button" type="submit" value="Create user" />
      </form>
    );
  }
}
