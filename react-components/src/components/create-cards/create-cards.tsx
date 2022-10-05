import axios from 'axios';
import Card from 'components/card/card';
import React from 'react';
import { ICard } from 'share/types';

class CreateCards extends React.Component<unknown, { promise: ICard[] }> {
  constructor(props: ICard[]) {
    super(props);
    this.state = {
      promise: [],
    };
  }

  async fetchCards() {
    const response = await axios.get<ICard[]>('https://fakestoreapi.com/products?limit=10');
    this.setState({
      promise: response.data,
    });
  }

  render() {
    this.fetchCards();
    return (
      <React.Fragment>
        {this.state.promise.map((card: ICard) => (
          <Card {...card} key={card.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default CreateCards;
