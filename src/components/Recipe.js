import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RECIPE_API } from "../utils/content";
import RecipeCard from "./RecipeCard";
import UserContext from "../utils/userContext";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const { username } = useContext(UserContext);

  const onClickHandler = () => {
    if (!search) return;
    setRecipeData([]);
    fetchRecipeData();
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const fetchRecipeData = async () => {
    const data = await fetch(RECIPE_API + (search || "Cake"));
    const json = await data.json();
    setRecipeData(json.hits);
  };

  return (
    <section id="feature">
      <h1>Hello {username || "Guest"}!.. Get Some Recipe..</h1>
      <div id="feature-nav">
        <input
          type="text"
          placeholder="Cake"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type="button" onClick={onClickHandler}>
          Search
        </button>
        <select
          name="default-list"
          id="default-list"
          onChange={(e) => setSearch(e.target.value)}
        >
          <option value={""}>Custome</option>
          <option value={"cake"}>Cake</option>
          <option value={"dal"}>Dal</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"momos"}>Momos</option>
          <option value={"pasta"}>Pasta</option>
          <option value={"rice"}>Rice</option>
          <option value={"salad"}>Salad</option>
          <option value={"samosa"}>Samosa</option>
          <option value={"shake"}>Shake</option>
        </select>
      </div>
      <div id="feature-cards">
        {recipeData.length == 0 ? (
          <Shimmer />
        ) : (
          recipeData.map((recipe, index) => {
            return <RecipeCard key={index} data={recipe} />;
          })
        )}
      </div>
    </section>
  );
};

export default Recipe;
