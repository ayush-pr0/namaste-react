import mockData from "../utils/mockData";

const RestaurantCard = ({ data }) => {
  return (
    <div id="card">
      <img src={data.info.image.url} />
      <div id="card-content">
        <h4>{data.info.name}</h4>
        <h5>{data.info.locality.name}</h5>
        <h5>Delivery Time: {data.order.deliveryTime}</h5>
        <h6>Rating: {data.info.rating.aggregate_rating}</h6>
      </div>
    </div>
  );
};

const Restaurant = () => {
  return (
    <section id="restaurant">
      <h1>Get Some Food...</h1>
      <div id="restaurant-cards">
        {mockData.RESTAURANT_DATA.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} data={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
