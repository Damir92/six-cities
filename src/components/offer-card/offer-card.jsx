import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = (props) => {
  const {
    image,
    inBookmark,
    isPremium,
    price,
    rating,
    title,
    type,
  } = props.offer;
  const {
    onTitleClick,
    onImageClick,
    onMouseEnterCard,
    onMouseLeaveCard,
  } = props;

  return <article
    className="cities__place-card place-card"
    onMouseEnter={ onMouseEnterCard }
    onMouseLeave={ onMouseLeaveCard }
  >
    { isPremium && (<div className="place-card__mark"><span>Premium</span></div>) }

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          onImageClick(title);
        }}
      >
        <img
          className="place-card__image"
          src={ image }
          width="260"
          height="200"
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{ price }</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button button ${inBookmark && `place-card__bookmark-button--active`}`}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">
            { inBookmark
              ?
              (`In bookmarks`)
              :
              (`To bookmarks`)
            }
          </span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: rating + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a
          href="#"
          onClick={onTitleClick}
        >
          { title }
        </a>
      </h2>
      <p className="place-card__type">{ type }</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    image: PropTypes.string.isRequired,
    inBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
};

export default OfferCard;
