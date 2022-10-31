import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './select';
import mockText from '../../../mocks/text';

const setUp = () =>
  render(<Select selectSalaryRef={undefined} labelType={mockText.labelUserSalary} />);

describe('Select component', () => {
  it('should correctly render select', () => {
    setUp();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should correctly set default option', () => {
    setUp();
    expect(
      (screen.getByRole('option', { name: 'less than 100$' }) as HTMLInputElement).selected
    ).toBe(true);
  });

  it('should display the correct number of options', () => {
    setUp();
    expect(screen.getAllByRole('option').length).toBe(7);
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
