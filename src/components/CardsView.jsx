import PropTypes from "prop-types";
import ShopCard from "./ShopCard";
import uniqid from 'uniqid'

export default function CardsView(props) { 
    return (
      <ul className="products-module">
        {props.cards.map((card) => {
          return (
            <li key={uniqid()} className="products-list-item">
              <ShopCard item={card} />
            </li>
          );
        })}
      </ul>
    );
  }
  
CardsView.propTypes = {
    cards: PropTypes.array.isRequired,
};