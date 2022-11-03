import React from 'react';
import { ProductCardProps, ProductCardState } from './types';
import ModalWindow from 'components/modal-window/modal-window';

class ProductCard extends React.Component<ProductCardProps, ProductCardState> {
  constructor(props: ProductCardProps) {
    super(props);
    this.state = {
      isOpenModalWindow: false,
      clickedCard: {
        name: '',
        image: '',
        status: '',
        gender: '',
        species: '',
        type: '',
        location: {
          name: '',
          url: '',
        },
      },
    };
  }

  markupForModalWindow() {
    return (
      <div className="modal-body-wrapper">
        <img
          className="modal-cart-picture"
          src={this.state.clickedCard.image}
          alt={this.state.clickedCard.name}
        />
        <div className="modal-cart-items">
          <h4 className="modal-cart-items__name">{this.state.clickedCard.name}</h4>
          <p className="modal-cart-items__status">
            <span>Status: </span>
            {this.state.clickedCard.status}
          </p>
          <p className="modal-cart-items__species">
            <span>Species: </span>
            {this.state.clickedCard.species}
          </p>
          <p className="modal-cart-items__type">
            <span>Type: </span>
            {this.state.clickedCard.type ? this.state.clickedCard.type : '---'}
          </p>
          <p className="modal-cart-items__gender">
            <span>Gender: </span>
            {this.state.clickedCard.gender}
          </p>
          <p className="modal-cart-items__location">
            <span>Location: </span>
            {this.state.clickedCard.location.name}
          </p>
        </div>
      </div>
    );
  }

  buttonHandler = () => {
    this.setState({
      clickedCard: this.props.card,
      isOpenModalWindow: true,
    });
  };

  onModalWindow = () => {
    this.setState({
      isOpenModalWindow: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <img className="card__img" src={this.props.card.image} alt={this.props.card.image} />
          <h3 className="card__title">{this.props.card.name}</h3>
          <button className="card__button" onClick={this.buttonHandler}>
            {this.props.buttonText}
          </button>
        </div>
        {this.state.isOpenModalWindow && (
          <ModalWindow onModalWindow={this.onModalWindow}>
            {this.markupForModalWindow()}
          </ModalWindow>
        )}
      </React.Fragment>
    );
  }
}

export default ProductCard;
