import React, { Component } from 'react';
import TextInput from 'components/form-elements/text-input/text-input';
import DateInput from 'components/form-elements/date-input/date-input';

export default class CreateUserForm extends Component<unknown> {
  nameTextInput!: HTMLInputElement | null;
  birthdayInput!: HTMLInputElement | null;
  inputNameRef: React.LegacyRef<HTMLInputElement> | undefined;
  inputDateRef: React.LegacyRef<HTMLInputElement> | undefined;

  constructor(props: unknown) {
    super(props);
    this.inputNameRef = (element) => (this.nameTextInput = element);
    this.inputDateRef = (element) => (this.birthdayInput = element);
  }

  componentDidMount(): void {
    this.getInputName();
  }

  getInputName = () => {
    if (this.nameTextInput) {
      console.log(this.nameTextInput.value);
      // this.nameTextInput.focus();
      // this.nameTextInput.value = '';
    }
  };

  getInputBirthday = () => {
    if (this.birthdayInput) {
      console.log(this.birthdayInput.value);
      // this.birthdayInput.focus();
      // this.birthdayInput.value = '';
    }
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.getInputName();
    this.getInputBirthday();
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
          labelType="Birthday"
          defaultValue="2000-01-01"
          minDate="1922-01-01"
          maxDate="2022-01-01"
          inputDateRef={this.inputDateRef}
        />
        <input className="create-user-button" type="submit" value="Create user" />
      </form>
    );
  }
}
