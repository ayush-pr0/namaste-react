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

export default RestaurantCard;
