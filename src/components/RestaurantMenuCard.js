import { useState } from "react";
import RestaurantMenuCardItem, {
  withAddButton,
} from "./RestaurantMenuCardItem";

const RestaurantMenuCard = ({ title, itemCards }) => {
  const [showCardItem, setShowCardItem] = useState(false);
  const RestaurantMenuCardItemWithAdd = withAddButton(RestaurantMenuCardItem);

  const clickHandler = () => {
    setShowCardItem(!showCardItem);
  };
  return (
    <div className="restaurant-menu-card">
      <div className="restaurant-menu-card-nav" onClick={clickHandler}>
        <h3>{`${title} (${itemCards.length})`}</h3>
        <label>▼</label>
      </div>
      {showCardItem &&
        itemCards.map((item) => (
          <RestaurantMenuCardItemWithAdd
            info={item?.card?.info}
            key={item?.card?.info?.id}
          />
        ))}
    </div>
  );
};

export default RestaurantMenuCard;
