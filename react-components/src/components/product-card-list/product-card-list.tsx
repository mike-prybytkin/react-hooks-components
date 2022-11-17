import React, { useContext } from 'react';
import ProductCard from 'components/product-card/product-card';
import mockText from 'mocks/text';
import Pagination from 'components/pagination/pagination';
import { StoreProviderContext } from 'components/store/store-provider';

const ProductCardList = () => {
  const context = useContext(StoreProviderContext);
  const { data, isLoading } = context;
  const renderCards = () => {
    return data.map((card) => (
      <ProductCard buttonText={mockText.productCardButton} card={card} key={card.id} />
    ));
  };

  const hasCards = data.length >= 1;
  return hasCards ? (
    <React.Fragment>
      <div className="cards-wrapper">{renderCards()}</div>
      <Pagination />
    </React.Fragment>
  ) : !isLoading ? (
    <p className="not-found-items-message">{mockText.itemNotFound}</p>
  ) : null;
};

export default ProductCardList;
