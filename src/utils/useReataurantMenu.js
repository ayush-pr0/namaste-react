import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/content";

const useReataurantMenu = (reqId) => {
  const [restaurantData, setRestaurantData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(RESTAURANT_API + reqId);

    const json = await data.json();
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
  };

  return restaurantData;
};

export default useReataurantMenu;
