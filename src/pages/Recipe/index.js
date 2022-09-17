// complete until API imported

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tempdata from "../../components/RecipePost/tempdata";

import './index.css'

const Recipe = () => {
  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(false); // use for fetch validity check, for now false
  const [data, setData] = useState(tempdata[id])

  const ingredients = data.ingredients.map(ingredient => {
    return (
      <li className="recipe-ingredient-ingredient">{ingredient}</li>
    )
  })

  //useEffect()

  return (
    <>
      {!isLoading && (
        <div className="recipe-container">
          <div className="recipe-image-container">
              <h2 className="recipe-image-description">Image by: {data.user}</h2>
              <img className="recipe-main-image" src={`../${data.image}`}/>
            </div>
          <div className="recipe-header">
            <h1 className="recipe-header-title">{data.title}</h1>
            <h2 className="recipe-header-subtitle">Cost: {data.cost}$ • Time: {data.time_minutes}</h2>
            <h2 className="recipe-header-description">{data.description}</h2>
          </div>
          <main className="recipe-body">
            <div className="recipe-ingredients-container">
              <h2 className="recipe-ingredients-title title">Ingredients needed:</h2>
              <ul className="recipe-ingredients-list">
                {ingredients}
              </ul>
            </div>
            <div className="recipe-tutorial-container">
              <h2 className="recipe-tutorial-title title">Start cooking!</h2>
              <div className="tutorial">

              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Recipe;
