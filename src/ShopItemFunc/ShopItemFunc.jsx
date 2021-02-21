import PropTypes from 'prop-types';

export default function ShopItemFunc(props) {
  const { item } = props;

  return (
    <div className="ShopItemFunc-MainContent">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="ShopItemFunc-Description">
        {item.descriptionFull}
      </div>
      <div className="ShopItemFunc-HighlightWindow_mobile"><div className="ShopItemFunc-HighlightOverlay"></div></div>
      <div className="ShopItemFunc-Divider"></div>
      <div className="ShopItemFunc-PurchaseInfo">
        <div className="ShopItemFunc-Price">{item.currency}{item.price.toFixed()}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionFull: PropTypes.string,
  currency: PropTypes.symbol,
  price: PropTypes.number
};
