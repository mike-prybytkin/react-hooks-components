import React from 'react';
import NavBar from 'components/nav-bar/nav-bar';
import LiveSearch from 'components/live-search/live-search';
import mockText from 'mocks/text';

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <LiveSearch placeholderText={mockText.searchPlaceholder} />
    </header>
  );
};

export default Header;
