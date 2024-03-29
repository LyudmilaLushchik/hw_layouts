import PropTypes from "prop-types";

export default function ShopItem(card) {    
  const { item } = card;

  return (
    <div className="product-item">
      <div className="products-list-item-img__wrap">
        <img className="card-image" src={item.img} alt={item.name} />
      </div>
      <h3 className="card-title">{item.name}</h3>
      <span className="product-color">{item.color}</span>

      <span className="card-price">{"$" + item.price}</span>
      <button className="add-to-cart__btn">Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
    item: PropTypes.object.isRequired,
};