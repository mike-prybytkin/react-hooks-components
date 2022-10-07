import Card from 'components/card/card';
import React from 'react';
import { ICard } from 'share/types';

class CreateCards extends React.Component<unknown, { data: ICard[]; isLoading: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading && <p>Loading ...</p>}
        {this.state.data.map((card: ICard) => (
          <Card {...card} key={card.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default CreateCards;
