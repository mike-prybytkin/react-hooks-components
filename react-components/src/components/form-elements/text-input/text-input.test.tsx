import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from './text-input';
import mockText from 'mocks/text';

const setUp = () =>
  render(
    <TextInput
      type={'text'}
      placeholderText={mockText.placeholderUserName}
      id={'test'}
      labelType={mockText.labelUserName}
      required={true}
      name={'name'}
      errors={{ userName: undefined }}
      register={jest.fn()}
      validationSchema={{
        required: '',
        minLength: {
          value: 0,
          message: '',
        },
        maxLength: {
          value: 0,
          message: '',
        },
      }}
    />
  );

describe('TextInput component', () => {
  it('should correctly render input', () => {
    setUp();
    screen.debug();
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
