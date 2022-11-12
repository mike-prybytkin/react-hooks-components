import React, { useState } from 'react';
import { ProductCardProps, IClikedCard } from './types';
import ModalWindow from 'components/modal-window/modal-window';

const ProductCard = (props: ProductCardProps) => {
  const { card, buttonText } = props;
  const [isOpenModalWindow, setOpenModalWindow] = useState(false);
  const initClickedCard: IClikedCard = {
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
  };
  const [clickedCard, setClickedCard] = useState(initClickedCard);

  const markupForModalWindow = () => {
    return (
      <div className="modal-body-wrapper">
        <img className="modal-cart-picture" src={clickedCard.image} alt={clickedCard.name} />
        <div className="modal-cart-items">
          <h4 className="modal-cart-items__name">{clickedCard.name}</h4>
          <p className="modal-cart-items__status">
            <span>Status: </span>
            {clickedCard.status}
          </p>
          <p className="modal-cart-items__species">
            <span>Species: </span>
            {clickedCard.species}
          </p>
          <p className="modal-cart-items__type">
            <span>Type: </span>
            {clickedCard.type ? clickedCard.type : '---'}
          </p>
          <p className="modal-cart-items__gender">
            <span>Gender: </span>
            {clickedCard.gender}
          </p>
          <p className="modal-cart-items__location">
            <span>Location: </span>
            {clickedCard.location.name}
          </p>
        </div>
      </div>
    );
  };

  const buttonHandler = () => {
    setClickedCard(card);
    setOpenModalWindow(true);
  };

  const onModalWindow = () => {
    setOpenModalWindow(false);
  };

  return (
    <React.Fragment>
      <div className="card">
        <img className="card__img" src={card.image} alt={card.image} />
        <h3 className="card__title">{card.name}</h3>
        <button className="card__button" onClick={buttonHandler}>
          {buttonText}
        </button>
      </div>
      {isOpenModalWindow && (
        <ModalWindow onModalWindow={onModalWindow}>{markupForModalWindow()}</ModalWindow>
      )}
    </React.Fragment>
  );
};

export default ProductCard;
