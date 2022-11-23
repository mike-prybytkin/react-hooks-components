import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './select';
import mockText from 'mocks/text';

const setUp = () =>
  render(
    <Select
      labelType={mockText.labelUserSalary}
      id={'test'}
      name={'salary'}
      register={jest.fn()}
      required
    >
      <React.Fragment>
        <option value="test-1">test-1</option>
        <option value="test-2">test-2</option>
      </React.Fragment>
    </Select>
  );

describe('Select component', () => {
  it('should correctly render select', () => {
    setUp();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should correctly set default option', () => {
    setUp();
    expect((screen.getByRole('option', { name: 'test-1' }) as HTMLSelectElement).value).toBe(
      'test-1'
    );
  });

  it('should display the correct number of options', () => {
    setUp();
    expect(screen.getAllByRole('option').length).toBe(2);
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
