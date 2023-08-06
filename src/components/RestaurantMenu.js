import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_URL, RESTAURANT_API } from "../utils/content";

const RestaurantMenu = () => {
  const { reqId } = useParams();
  const [restaurantData, setRestaurantData] = useState({});
  // const [restaurantMenuData, setRestaurantMenuData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(RESTAURANT_API + reqId);

    const json = await data.json();
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
    // setRestaurantMenuData(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    // console.log(restaurantMenuData);
    // restaurantMenuData.shift();
  };

  return !restaurantData.name ? (
    <></>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "120px",
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
