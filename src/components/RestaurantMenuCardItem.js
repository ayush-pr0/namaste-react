import { CLOUDINARY_URL } from "../utils/content";

const RestaurantMenuCardItem = ({ info }) => {
  return (
    <div className="restaurant-menu-card-item">
      <div className="info">
        <h5>
          {info?.name} - Rs.
          {(info?.price / 100).toFixed(0) ||
            (info?.defaultPrice / 100).toFixed(0)}
        </h5>
        <h6>{info?.description}</h6>
      </div>
      <img src={CLOUDINARY_URL + info?.imageId} alt={info?.name} />
    </div>
  );
};

export const withAddButton = (RestaurantMenuCardItem) => {
  return (props) => {
    return (
      <div style={{ display: "flex" }}>
        <RestaurantMenuCardItem {...props} />
        <button type="button" style={{ margin: "5px", backgroundColor: "gray", color: "white", borderRadius: "5px" }}>
          Add
        </button>
      </div>
    );
  };
};

export default RestaurantMenuCardItem;
