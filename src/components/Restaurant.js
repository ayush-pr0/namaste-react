import { CLOUDINARY_URL } from "../utils/content";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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

const Restaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortValue, setSortValue] = useState("");
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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResult(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <section id="restaurant">
      <h1>Get Some Food...</h1>
      <div id="restaurant-nav">
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
      <div id="restaurant-cards">
        {result?.length == 0 ? (
          <Shimmer />
        ) : (
          result.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} data={restaurant} />
          ))
        )}
      </div>
    </section>
  );
};

export default Restaurant;
