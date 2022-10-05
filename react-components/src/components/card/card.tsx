import React from 'react';
import { ICard } from 'share/types';

class Card extends React.Component {
  private title: string;
  private image: string;
  private rating: number;
  private price: number;

  constructor(props: ICard) {
    super(props);
    this.title = props.title;
    this.image = props.image;
    this.rating = props.rating.rate;
    this.price = props.price;
  }
  render() {
    return (
      <div className="card">
        <p className="card__title">{this.title}</p>
        <img className="card__img" src={this.image} alt="" />
        <p className="card__rating">{this.rating} &#9733;</p>
        <p className="card__price">{this.price} &#36;</p>
      </div>
    );
  }
}

export default Card;
