import React, { Component } from 'react';
import ProductCard from 'components/product-card/product-card';
import { CardListProps } from './types';
import mockText from 'mocks/text';

export class ProductCardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  renderCards() {
    return this.props.cards.map((card) => (
      <ProductCard buttonText={mockText.productCardButton} card={card} key={card.id} />
    ));
  }

  render() {
    return this.props.cards ? (
      <div className="cards-wrapper">{this.renderCards()}</div>
    ) : (
      <p className="not-found-items-message">{mockText.itemNotFound}</p>
    );
  }
}

export default ProductCardList;
