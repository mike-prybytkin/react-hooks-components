import React from 'react';
import CardList from 'components/card-list/card-list';
import { ICard } from 'share/types';

type MainProps = { cards: ICard[] };

class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to our store!</h1>
        <div className="cards-wrapper">
          <CardList cards={this.props.cards} />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
