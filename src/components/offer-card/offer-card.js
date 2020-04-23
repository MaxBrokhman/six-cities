import React from 'react';
// eslint-disable-next-line
export const OfferCard = ({offer, hoverHandler, leaveHandler}) => (
  <article
    className="cities__place-card place-card"
    onMouseOver={hoverHandler(offer)}
    onMouseLeave={leaveHandler}
  >
    {/* <div className="place-card__mark">
      <span>Premium</span>
    </div> */}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        {// eslint-disable-next-line
        <img className="place-card__image" src={`img/${offer.src}`} width="260" height="200" alt="Place image" />}
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          {// eslint-disable-next-line
        <b className="place-card__price-value">&euro;{offer.price}</b>}
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlink="href=#icon-bookmark"></use>
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
