const RecipeCard = ({ data }) => {
  const { label, image, calories, ingredients, source, url } = data?.recipe;

  return (
    <div className="card">
      <img src={image} alt={label} />
      <div className="card-content">
        <h4>{label}</h4>
        <h5>
          {(calories / 10).toFixed(0)} Calories | {ingredients.length}{" "}
          Ingredients
        </h5>
        <h6>{source}</h6>
      </div>
    </div>
  );
};

export default RecipeCard;
