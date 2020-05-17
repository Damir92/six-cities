import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  _setActiveCard(id) {
    this.setState({
      activeCard: id
    }, () => {
      console.log(`Active card is ${this.state.activeCard}`); // eslint-disable-line no-console
    });
  }

  _unsetActiveCard() {
    this.setState({
      activeCard: null
    }, () => {
      console.log(`No activeCard card is ${this.state.activeCard}`); // eslint-disable-line no-console
    });
  }

  _cardImageClickHandler(activeCard) {
    console.log(`On Image click: ${activeCard}`); // eslint-disable-line no-console
  }

  render() {
    const {
      city,
      count,
      offers,
      onTitleClick,
    } = this.props;

    return <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{ count } places to stay in { city }</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
        <select className="places__sorting-type" id="places-sorting">
          <option className="places__option" value="popular" defaultValue="">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select>
      </form>
      <div className="cities__places-list places__list tabs__content">

        { offers.map((offer, index) => {
          return (
            <OfferCard
              key={ index }
              offer={ offer }
              onTitleClick={ onTitleClick }
              onImageClick={ () => {
                this._cardImageClickHandler(offer.title);
              } }
              onMouseEnterCard={ () => {
                this._setActiveCard(offer);
              } }
              onMouseLeaveCard={ () => {
                this._unsetActiveCard();
              } }
            />
          );
        }) }

      </div>
    </section>;
  }
}

OfferList.propTypes = {
  city: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default OfferList;
