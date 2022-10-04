import React from 'react';
import NavBar from 'components/nav-bar/nav-bar';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavBar />
      </header>
    );
  }
}

export default Header;
