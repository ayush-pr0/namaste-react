import { useParams } from "react-router-dom";
import useReataurantMenu from "../utils/useReataurantMenu";
import { CLOUDINARY_URL } from "../utils/content";
import Loding from "./Loding";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const { reqId } = useParams();

  const { resData, resCards } = useReataurantMenu(reqId);

  return !resData?.name ? (
    <Loding />
  ) : (
    <div id="restaurant-menu">
      <div id="restaurant-menu-info">
        <div id="restaurant-menu-img">
          <img src={CLOUDINARY_URL + resData.cloudinaryImageId} alt="DishIMG" />
          <span>{`⌛ ${resData.sla.slaString} | ${resData.costForTwoMessage}`}</span>
        </div>
        <div id="restaurant-menu-details">
          <h1>{resData.name}</h1>
          <h4>{`${resData.areaName}, ${resData.city}`}</h4>
          <h3>{resData?.cuisines?.join(", ")}</h3>
          <div id="rating">
            <h5>⭐ {resData.avgRating}</h5>
            <h5>{resData.totalRatingsString}</h5>
          </div>
        </div>
      </div>
      <div id="restaurant-menu-cards">
        {resCards.map((element) => (
          <RestaurantMenuCard
            title={element?.card?.card?.title}
            itemCards={element?.card?.card?.itemCards}
            key={element?.card?.card?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
