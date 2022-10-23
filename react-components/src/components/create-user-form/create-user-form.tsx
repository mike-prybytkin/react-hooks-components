import React, { Component } from 'react';
import TextInput from 'components/form-elements/text-input/text-input';

export default class CreateUserForm extends Component<unknown> {
  nameTextInput!: HTMLInputElement | null;
  inputNameRef: React.LegacyRef<HTMLInputElement> | undefined;

  constructor(props: unknown) {
    super(props);
    this.inputNameRef = (element) => (this.nameTextInput = element);
  }

  getInputName = () => {
    if (this.nameTextInput) {
      console.log(this.nameTextInput.value);
      // this.nameTextInput.focus();
      // this.nameTextInput.value = '';
    }
  };

  componentDidMount(): void {
    this.getInputName();
  }

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.getInputName();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput labelType="Name:" placeholderText="Your Name" inputNameRef={this.inputNameRef} />
        <br />
        <input type="submit" value="Create user" />
      </form>
    );
  }
}
