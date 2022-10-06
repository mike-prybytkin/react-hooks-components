import React from 'react';
import NavBar from 'components/nav-bar/nav-bar';
import LiveSearch from 'components/live-search/live-search';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavBar />
        <LiveSearch />
      </header>
    );
  }
}

export default Header;
