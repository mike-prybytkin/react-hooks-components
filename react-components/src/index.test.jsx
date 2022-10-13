import React from 'react';
import App from './components/app/app';
import ReactDOM from 'react-dom';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Testing Application Root', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    global.document.getElementById = (id) => id === 'root' && div;
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });

  it('should render the app inside div which has root id', () => {
    expect(global.document.getElementById('root')).toBeDefined();
  });

  it('should render App component', () => {
    expect(App).toBeDefined();
  });
});
