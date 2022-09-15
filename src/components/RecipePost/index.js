import "./index.css";

const RecipePost = ({ props }) => {
  return (
    <div className="recipe-container flex justify-center">
      <div className="recipe-post">
        <img className="recipe-post-image object-cover border-2 border-gray-300" src={props.image} />
        <div className="recipe-body ml-8">
          <div className="recipe-body-header">
            <a href={props.link}>
              <h1 className="recipe-body-title">{props.title}</h1>
            </a>
            <h2 className="recipe-body-h2 time">Date created: {props.time_minutes}</h2>
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
