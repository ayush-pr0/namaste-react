import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { SWIGGI_API } from "../utils/content";

const Restaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);

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
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResult(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
        {result.length == 0 ? (
          <Shimmer />
        ) : (
          result.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCard data={restaurant} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Restaurant;
