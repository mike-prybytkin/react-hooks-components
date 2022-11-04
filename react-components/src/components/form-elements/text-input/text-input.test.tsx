import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from './text-input';
import mockText from 'mocks/text';

const setUp = () =>
  render(
    <TextInput
      labelType={mockText.labelUserName}
      inputNameRef={undefined}
      placeholderText={mockText.placeholderUserName}
      minNameLength="2"
      maxNameLength="12"
      required={true}
    />
  );

describe('TextInput component', () => {
  it('should correctly render input', () => {
    setUp();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should correctly render placeholder', () => {
    setUp();
    expect(
      screen.getByPlaceholderText(new RegExp(mockText.placeholderUserName, 'i'))
    ).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
