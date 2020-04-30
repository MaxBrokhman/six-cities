import React from 'react';

import {useOfferById, useSimilarOffers} from './hooks';
import {useAppContext} from '../../reducer/reducer';
import {Header} from '../header/header';
import {NearPlacesList} from '../near-places-list/near-places-list';
import {Map} from '../map/map';
import {useFavorite} from '../../common-hooks/use-favorite';

// eslint-disable-next-line
export const OfferDetails = ({id}) => {
  const {state} = useAppContext();
  const {offer} = useOfferById(id, state.offersList);
  const {similarOffers} = useSimilarOffers({
    city: offer.city.name,
    places: state.offersList,
    id,
  });
  const {addFavHandler} = useFavorite();
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.is_premium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button
                  className={`property__bookmark-button button ${offer.is_favorite
                    ? `property__bookmark-button--active`
                    : ``}
                  `}
                  type="button"
                  // eslint-disable-next-line
                  onClick={addFavHandler(offer.id)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `96%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Entire place
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatar_url} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.is_pro && (
                      <span className="property__user-status">
                      Pro
                      </span>
                    )
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              {
                offer.reviews && (
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                    <ul className="reviews__list">
                      <li className="reviews__item">
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">
                        Max
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `94%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                          </p>
                          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                        </div>
                      </li>
                    </ul>
                    <form className="reviews__form form" action="#" method="post">
                      <label className="reviews__label form__label" htmlFor="review">Your review</label>
                      <div className="reviews__rating-form form__rating">
                        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>
                      </div>
                      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                      <div className="reviews__button-wrapper">
                        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                        </p>
                        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                      </div>
                    </form>
                  </section>
                )
              }
            </div>
          </div>
          <Map
            activeCard={offer}
            offers={similarOffers.concat(offer)}
            className="property__map"
          />
        </section>
        <div className="container">
          <NearPlacesList places={similarOffers} addFavHandler={addFavHandler} />
        </div>
      </main>
    </div>
  );
};
