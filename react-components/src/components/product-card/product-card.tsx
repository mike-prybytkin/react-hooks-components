import React from 'react';
import { ProductCardProps } from './types';

class ProductCard extends React.Component<ProductCardProps, unknown> {
  constructor(props: ProductCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="card__img" src={this.props.card.image} alt={this.props.card.image} />
        <h3 className="card__title">{this.props.card.name}</h3>
        <button className="card__button">{this.props.buttonText}</button>
      </div>
    );
  }
}

export default ProductCard;
