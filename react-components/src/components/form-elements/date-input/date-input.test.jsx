import React from 'react';
import { render, screen } from '@testing-library/react';
import mockText from '../../../mocks/text';
import DateInput from './date-input';

const setUp = () => {
  return render(
    <DateInput
      labelType={mockText.labelUserBirthday}
      defaultValue="2000-01-01"
      inputDateRef={undefined}
    />
  );
};

describe('DateInput component', () => {
  // it('should correctly render date input', () => {
  //   setUp();
  //   expect(screen.findByText(new RegExp(mockText.labelUserBirthday, 'i'))).toBeInTheDocument();
  // });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
