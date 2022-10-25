import React, { Component } from 'react';
import TextInput from 'components/form-elements/text-input/text-input';
import DateInput from 'components/form-elements/date-input/date-input';
import Select from 'components/form-elements/select/select';

export default class CreateUserForm extends Component<unknown> {
  nameTextInput!: HTMLInputElement | null;
  birthdayInput!: HTMLInputElement | null;
  selectSalary!: HTMLSelectElement | null;
  inputNameRef: React.LegacyRef<HTMLInputElement> | undefined;
  inputDateRef: React.LegacyRef<HTMLInputElement> | undefined;
  selectSalaryRef: React.LegacyRef<HTMLSelectElement> | undefined;

  constructor(props: unknown) {
    super(props);
    this.inputNameRef = (element) => (this.nameTextInput = element);
    this.inputDateRef = (element) => (this.birthdayInput = element);
    this.selectSalaryRef = (element) => (this.selectSalary = element);
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

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.getUserName();
    this.getUserBirthday();
    this.getUserSalary();
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
        <input className="create-user-button" type="submit" value="Create user" />
      </form>
    );
  }
}
