import React from 'react';
import ProductCard from 'components/product-card/product-card';
import { CardListProps } from './types';
import mockText from 'mocks/text';
import Pagination from 'components/pagination/pagination';

const ProductCardList = (props: CardListProps) => {
  const renderCards = () => {
    return props.cards.map((card) => (
      <ProductCard buttonText={mockText.productCardButton} card={card} key={card.id} />
    ));
  };

  const hasCards = props.cards.length >= 1;
  return hasCards ? (
    <React.Fragment>
      <div className="cards-wrapper">{renderCards()}</div>
      <Pagination />
    </React.Fragment>
  ) : (
    <p className="not-found-items-message">{mockText.itemNotFound}</p>
  );
};

export default ProductCardList;
