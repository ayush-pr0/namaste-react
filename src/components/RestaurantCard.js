import { CLOUDINARY_URL } from "../utils/content";

const RestaurantCard = ({ data }) => {
  const { name, cloudinaryImageId, locality, areaName, avgRating, sla } =
    data.info;

  return (
    <div className="card">
      <img src={CLOUDINARY_URL + cloudinaryImageId} />
      <div className="card-content">
        <h4>{name}</h4>
        <h5>{`${locality}, ${areaName}`}</h5>
        <h5>Delivery Time: {sla.slaString}</h5>
        <h6>Rating: {avgRating}</h6>
      </div>
    </div>
  );
};

// Higher Order Component (accept a component and return enhanced component)
// (input)RestaurantCard => (output)RestaurantCardGood
export const withGoodLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          style={{
            backgroundColor: "green",
            color: "white",
            margin: "0px 17px",
            padding: "8px",
            borderRadius: "8px",
            position: "absolute",
          }}
        >
          Good
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
