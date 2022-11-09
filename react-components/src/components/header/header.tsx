import React from 'react';
import NavBar from 'components/nav-bar/nav-bar';
import LiveSearch from 'components/live-search/live-search';
import { HeaderProps } from './types';
import mockText from 'mocks/text';

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <NavBar />
      <LiveSearch onSearch={props.onSearch} placeholderText={mockText.searchPlaceholder} />
    </header>
  );
};

export default Header;
