import React from 'react';
import CardList from 'components/product-card-list/product-card-list';
import { MainProps } from './types';

const Main = (props: MainProps) => {
  return (
    <React.Fragment>
      <h1>{props.heading}</h1>
      <CardList
        cards={props.cards}
        queryPage={props.queryPage}
        allPages={props.allPages}
        cardsLimit={props.cardsLimit}
        updateQuery={props.updateQuery}
      />
    </React.Fragment>
  );
};

export default Main;
