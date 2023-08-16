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
    const resData = json?.data?.cards[0]?.card?.card?.info;
    const resCards =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (e) => e?.card?.card?.["@type"].includes(".ItemCategory")
      );
    setRestaurantData({ resData, resCards });
  };

  return restaurantData;
};

export default useReataurantMenu;
