import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { OfferCardLocation} from '../../const';

type OfferCardProps = {
  location: OfferCardLocation;
  offer: Offer;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
}

function OfferCard({location, offer, onMouseEnter, onMouseLeave}: OfferCardProps): JSX.Element {
  const {price, rating, type, title, id, isPremium, previewImage,} = offer;

  const offerCardClass = classNames('place-card', {
    'cities__card': location === OfferCardLocation.cities,
    'near-places__card': location === OfferCardLocation.nearPlaces,
  });

  const onMouseEnterHandler = () => {
    if (onMouseEnter) {
      onMouseEnter(offer.id);
    }
  };

  const onMouseLeaveHandler = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article
      className={offerCardClass}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="place-card__mark">
        {isPremium ? <span>Premium</span> : ''}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 100 / 5}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
