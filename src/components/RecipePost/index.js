import "./index.css";

const RecipePost = ({ props }) => {
  return (
    <div className="recipe-post-container">
      <div className="recipe-post">
        <img className="recipe-post-image shadow-md" src={props.image} />
        <div className="recipe-body ml-8">
          <div className="recipe-body-header">
            <h1 className="recipe-body-title"><a href={`/recipe/${props.id-1}`}>{props.title}</a></h1>
            <h2 className="recipe-body-h2 time">Required time: {props.time_minutes}</h2>
            <h2 className="recipe-body-h2 cost">Estimated price: {props.cost}</h2>
          </div>
          <div className="recipe-body-description bg-gray-200 rounded-2xl p-3">
            <p className="recipe-body-paragraph">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePost;
