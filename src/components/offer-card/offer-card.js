import React from 'react';
import {Link} from 'react-router-dom';

export const OfferCard = ({
  // eslint-disable-next-line
  offer, 
  // eslint-disable-next-line
  hoverHandler, 
  // eslint-disable-next-line
  leaveHandler,
  // eslint-disable-next-line
  addFavHandler,
}) => (
  <article
    className="cities__place-card place-card"
    onMouseOver={hoverHandler(offer)}
    onMouseLeave={leaveHandler}
  >
    {// eslint-disable-next-line
      offer.is_premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      {// eslint-disable-next-line
      <Link to={`/${offer.id}`}>
          <img
            className="place-card__image"
            // eslint-disable-next-line
            src={offer.preview_image} 
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>}
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          {// eslint-disable-next-line
        <b className="place-card__price-value">&euro;{offer.price}</b>}
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          // eslint-disable-next-line
          className={`place-card__bookmark-button button ${offer.is_favorite 
            ? `place-card__bookmark-button--active`
            : ``}
          `}
          type="button"
          onClick={addFavHandler}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `93%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        {// eslint-disable-next-line
        <a href="#">{offer.description}</a>}
      </h2>
      {// eslint-disable-next-line
        <p className="place-card__type">{offer.type}</p>}
    </div>
  </article>
);
