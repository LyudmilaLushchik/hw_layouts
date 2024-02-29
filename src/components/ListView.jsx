import PropTypes from "prop-types";
import ShopItem from "./ShopItem";
import uniqid from "uniqid";

export default function ListView(props) { 
    return (
      <ul className="products-list">
        {props.items.map((item) => {
          return (
            <li key={uniqid()} className="products-list-item">
              <ShopItem item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
  
ListView.propTypes = {
    items: PropTypes.array.isRequired,
};