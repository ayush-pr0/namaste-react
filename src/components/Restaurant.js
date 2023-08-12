import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard, { withGoodLabel } from "./RestaurantCard";
import { SWIGGI_API } from "../utils/content";

const Restaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);

  const RestaurantCardGood = withGoodLabel(RestaurantCard);

  const search_for = () => {
    if (!searchText.trim()) {
      setResult(listOfRestaurants);
      return;
    }

    let res = listOfRestaurants.filter((e) =>
      e.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResult(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGI_API);

    const json = await data.json();
    const filterData = json.data.cards.filter(
      (e) => e.card.card.id === "restaurant_grid_listing"
    );
    setListOfRestaurants(
      filterData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResult(
      filterData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <section id="feature">
      <h1>Get Some Food...</h1>
      <div id="feature-nav">
        <input
          type="text"
          placeholder="Domino's Pizza"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button type="button" onClick={search_for}>
          Search
        </button>
      </div>
      <div id="feature-cards">
        {result?.length == 0 ? (
          <Shimmer />
        ) : (
          result?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.2 ? (
                <RestaurantCardGood data={restaurant} />
              ) : (
                <RestaurantCard data={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Restaurant;
