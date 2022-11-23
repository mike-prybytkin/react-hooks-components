import React from 'react';
import { render, screen } from '@testing-library/react';
import mockText from 'mocks/text';
import Checkbox from './checkbox';

const setUp = () => {
  return render(
    <Checkbox
      labelType={mockText.labelUserMailing}
      id={'test'}
      register={jest.fn()}
      name={'mailing'}
      required={false}
    />
  );
};

describe('Checkbox component', () => {
  it('should correctly render checkbox', () => {
    setUp();
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
