import React from 'react';
import PropTypes from 'prop-types';

export default class ShopItemClass extends React.Component {
  constructor(props) {
    super(props);

    this.item = props.item;
  }

  render() {
    const item = this.item;

    return (
      <div className="ShopItemClass-MainContent">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="ShopItemClass-Description">
          {item.descriptionFull}
        </div>
        <div className="ShopItemClass-HighlightWindow_mobile"><div className="ShopItemClass-HighlightOverlay"></div></div>
        <div className="ShopItemClass-Divider"></div>
        <div className="ShopItemClass-PurchaseInfo">
          <div className="ShopItemClass-Price">{item.currency}{item.price.toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionFull: PropTypes.string,
  currency: PropTypes.symbol,
  price: PropTypes.number
};
