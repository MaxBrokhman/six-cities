import React from 'react';
import {Link} from 'react-router-dom';

import {TOffer} from '../../reducer/types';

type TOfferCardProps = {
  offer: TOffer;
  hoverHandler: (offer: TOffer) => () => void;
  leaveHandler: () => void;
  addFavHandler: () => void;
}

export const OfferCard = ({
  offer,
  hoverHandler,
  leaveHandler,
  addFavHandler,
}: TOfferCardProps): JSX.Element => (
  <article
    className="cities__place-card place-card"
    onMouseOver={hoverHandler(offer)}
    onMouseLeave={leaveHandler}
  >
    {
      offer.is_premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/${offer.id}`}>
        <img
          className="place-card__image"
          src={offer.preview_image}
          width="260"
          height="200"
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
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
        <a href="#">{offer.description}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);
