import { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import { MIN_SYMBOL_COMMENT, MAX_SYMBOL_COMMENT, RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createSuccessReview } from '../../store/offer-process/selectors';
import { ReviewData } from '../../types/review-data';
import { fetchAddNewComment } from '../../store/api-actions';

type ReviewsFormProps = {
  activeId: number;
}

function ReviewForm({ activeId }: ReviewsFormProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const [isSendingDisabled, setSendingDisabled] = useState(true);
  const isSuccess = useAppSelector(createSuccessReview);
  const [isFormDisabled, setFormDisabled] = useState(false);

  const fieldChangeHandle = (evt: ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value });
  };

  useEffect(() => {
    if (isSuccess === RequestStatus.Success) {
      setFormData({
        rating: '',
        review: '',
      });
    }

    if (isSuccess === RequestStatus.Failure ||
        isSuccess === RequestStatus.Unknow ||
        isSuccess === RequestStatus.Success) {
      setFormDisabled(false);
    }
    if (isSuccess === RequestStatus.Pending) {
      setFormDisabled(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    setSendingDisabled(
      formData.rating === '' ||
      formData.review.length < MIN_SYMBOL_COMMENT ||
      formData.review.length > MAX_SYMBOL_COMMENT
    );
  }, [formData, isSendingDisabled]);

  const onSubmit = ({ id, review }: ReviewData) => {
    dispatch(fetchAddNewComment({ id, review }));
  };

  const submitHandle = (evt: FormEvent <HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.rating && formData.review) {
      onSubmit({
        id: activeId,
        review: {
          comment: formData.review,
          rating: Number(formData.rating),
        }
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={ submitHandle }>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onChange={ fieldChangeHandle }
          checked={ formData.rating === '5' }
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={ fieldChangeHandle }
          checked={ formData.rating === '4' }
          disabled={ isFormDisabled }
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={ fieldChangeHandle }
          checked={ formData.rating === '3' }
          disabled={ isFormDisabled }
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={ fieldChangeHandle }
          checked={ formData.rating === '2' }
          disabled={ isFormDisabled }
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={ fieldChangeHandle }
          checked={ formData.rating === '1' }
          disabled={ isFormDisabled }
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={ fieldChangeHandle }
        disabled={ isFormDisabled }
        value={ formData.review }
      >

      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={ isSendingDisabled || isFormDisabled }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
