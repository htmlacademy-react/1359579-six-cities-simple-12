import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Offers, Offer } from '../../types/offer';
import { Reviews } from '../../types/review';
import { useParams } from 'react-router-dom';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewForm from '../../components/reviews-form/reviews__form';
import NearPlaces from '../../components/near-places/near-places';
import Map from '../../components/map/map';
import { PropertyMapLocation } from '../../const';

type OfferPageProps = {
  offers: Offers;
  reviews: Reviews;
}

function OfferPage({ offers, reviews}: OfferPageProps): JSX.Element {
  const {id} = useParams();

  const offer: Offer | undefined = offers.find((flat) => flat.id === Number(id));

  if (!offer) {
    throw new Error('This URL doesn`t exist.');
  }

  const {type, title, description, isPremium, rating, bedrooms, maxAdults, price, goods, owner, images,} = offer;

  return (

    <div className="page">
      <Helmet>
        <title>
          Offer page of our service
        </title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image) => (
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
                isPremium ?
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                  : ''
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating) * 100 / 5}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key="good">
                      {good}
                    </li>
                  ))};
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={owner.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {owner.name}
                  </span>
                  <span className="property__user-status">
                    {owner.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
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
            <Map offers={offers} selectedOffer={offer} propertyMapLocation={PropertyMapLocation.property} city={offer.city}/>
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaces offers={offers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
