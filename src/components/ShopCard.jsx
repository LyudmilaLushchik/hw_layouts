import PropTypes from "prop-types";

export default function ShopCard(card) {    
    const {item} = card;

    const content = {
      backgroundImage: "url(" + item.img + ")",
      width: 300,
      height: 300,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  };

  return (
    <div style={content} className="card-container">
      <header className="card-container-header">
        <h3 className="card-title">{item.name}</h3>
        <span className="product-color">{item.color}</span>
      </header>
      <footer className="card-footer">
        <span className="card-price">{"$"+ item.price}</span>
        <button className="add-to-cart__btn">Add to cart</button>
      </footer>
    </div>
  );
}

ShopCard.propTypes = {
    item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    }),
};