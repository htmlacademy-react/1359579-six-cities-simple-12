import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { OfferCardPosition } from '../../const';
import { getPlaceRating } from '../../const';

type OfferCardProps = {
  location: OfferCardPosition;
  offer: Offer;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
}

function OfferCard({
  location,
  offer,
  onMouseEnter,
  onMouseLeave,
}: OfferCardProps): JSX.Element {

  const {id, isPremium, previewImage, price, rating, title, type } = offer;

  const offerCardClass: string = classNames('place-card', {
    'cities__card': location === OfferCardPosition.Cities,
    'near-places__card': location === OfferCardPosition.NearPlaces,
  });

  const mouseInputHandle = () => {
    if (onMouseEnter) {
      onMouseEnter(offer.id);
    }
  };

  const mouseLeaveHandle = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article
      className={ offerCardClass }
      onMouseEnter={ mouseInputHandle }
      onMouseLeave={ mouseLeaveHandle }
    >
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ''
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ `/offer/${offer.id}` }>
          <img className="place-card__image" src={ previewImage } width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getPlaceRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `/offer/${ id }` }>
            { title }
          </Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default OfferCard;
