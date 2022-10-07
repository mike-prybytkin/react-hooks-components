import React from 'react';
import NavBar from 'components/nav-bar/nav-bar';
import FetchService from 'fetch-service/fetch-service';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavBar />
        <FetchService />
      </header>
    );
  }
}

export default Header;
