import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewForm from '../../components/reviews-form/reviews-form';
import NearPlaces from '../../components/near-places/near-places';
import Map from '../../components/map/map';
import { PropertyMapLocation } from '../../const';
import { getPlaceRating } from '../../const';
import { fetchOfferActiveAction, fetchOffersNearbyActiveAction, } from '../../store/api-actions';
import NotFoundPage from '../not-found-screen/not-found-screen';
import ScreenLoading from '../screen-loading/screen-loading';
import {
  getActiveOffer,
  getActiveOfferStatus,
  getActiveOffersNearby,
  getReviews
} from '../../store/offer-process/selectors';
// import { getAuthorizationStatus } from '../../store/user-process/selectors';

function OfferPage(): JSX.Element {

  const { id } = useParams();
  const activeOfferId = Number(id);
  const offerActive = useAppSelector(getActiveOffer);
  const offersNearbyActive = useAppSelector(getActiveOffersNearby);
  const isActiveOfferStatus = useAppSelector(getActiveOfferStatus);

  const reviews = useAppSelector(getReviews);
  // const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferActiveAction(activeOfferId));
    dispatch(fetchOffersNearbyActiveAction(activeOfferId));

  }, [dispatch, activeOfferId]);

  if (isNaN(activeOfferId)) {
    return <NotFoundPage />;
  }

  if (!offerActive || !isActiveOfferStatus) {
    return <ScreenLoading />;
  }

  return (

    <div className="page">
      <Helmet>
        <title>
          Offer page of our service
        </title>
      </Helmet>

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offerActive.images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Studio" />
                  </div>
                ))
              };
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offerActive.isPremium ?
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                  : ''
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offerActive.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getPlaceRating(offerActive.rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offerActive.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerActive.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offerActive.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offerActive.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offerActive.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offerActive.goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))};
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offerActive.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offerActive.host.name}
                  </span>
                  <span className="property__user-status">
                    {offerActive.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offerActive.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {
                    reviews.map((review) => <ReviewsItem review={review} key={review.id}/>)
                  }
                </ul>
                <ReviewForm />
              </section>
            </div>
            <Map city={offerActive.city} offers={offersNearbyActive} selectedOffer={offerActive} propertyMapLocation={PropertyMapLocation.property} />
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaces offers={offersNearbyActive} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
