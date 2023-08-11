import { useParams } from "react-router-dom";
import useReataurantMenu from "../utils/useReataurantMenu";
import { CLOUDINARY_URL } from "../utils/content";

const RestaurantMenu = () => {
  const { reqId } = useParams();

  const restaurantData = useReataurantMenu(reqId);

  return !restaurantData.name ? (
    <></>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px",
      }}
    >
      <h1>{restaurantData.name}</h1>
      <br />
      <img
        src={CLOUDINARY_URL + restaurantData.cloudinaryImageId}
        style={{
          width: "300px",
          height: "240px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <br />
      <h2>{restaurantData.areaName}</h2>
      <h3>{`${restaurantData?.cuisines?.join(", ")} - ${
        restaurantData.costForTwoMessage
      }`}</h3>
    </div>
  );
};

export default RestaurantMenu;
