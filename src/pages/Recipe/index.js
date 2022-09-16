import { useState } from "react";
import tempdata from "../../components/RecipePost/tempdata";

const Recipe = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [isLoading, setIsLoading] = useState(false); // use for fetch validity check, for now false
  const [data, setData] = useState({})

  setData(tempdata[id])

  return (
    <>
      {!isLoading && (
        <div className="recipe-container">
          <div className="recipe-header">
            <h1 className="recipe-header-title">{data.title}</h1>
            <h2 className="recipe-header-subtitle">{data.updated_at}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
