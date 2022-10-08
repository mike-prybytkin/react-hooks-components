import React, { Component } from 'react';
import Card from 'components/card/card';
import { ICard } from 'share/types';

type CardListProps = { cards: ICard[] };

export class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  renderCards() {
    return this.props.cards.map((card) => <Card key={card.id} {...card} />);
  }

  render() {
    return <React.Fragment>{this.renderCards()}</React.Fragment>;
  }
}

export default CardList;
