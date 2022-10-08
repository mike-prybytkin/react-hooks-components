import React from 'react';
import NavBar from 'components/nav-bar/nav-bar';
import LiveSearch from 'components/live-search/live-search';
import { ICard } from 'share/types';

type HeaderProps = {
  cards: ICard[];
  onSearch: (cards: ICard[]) => void;
};

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <NavBar />
        <LiveSearch cards={this.props.cards} onSearch={this.props.onSearch} />
      </header>
    );
  }
}

export default Header;
