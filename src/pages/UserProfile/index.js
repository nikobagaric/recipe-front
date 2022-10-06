import "./index.css";
import tempdata from "../../components/RecipePost/tempdata";
import usedata from "../../components/UserCard/usedata";
import RecipePost from "../../components/RecipePost";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  const userRecipes = tempdata
    .filter((recipe) => recipe.user_id.toString() === id)
    .map((recipe) => {
      return <RecipePost props={recipe} />;
    });

  const userData = usedata.filter((user) => user.id.toString() === id);

  console.log(userData);

  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <img
          className="user-profile-image"
          src={userData[0].image}
          alt="user profile"
        />
        <div className="user-profile-description">
          <h2 className="user-profile-name">{userData[0].name}</h2>
          <p className="user-profile-bio">{userData[0].bio}</p>
        </div>
      </div>
      <h1 className="user-recipes-title">{userData[0].name}'s Recipes</h1>
      <div className="user-recipes">{userRecipes}</div>
    </div>
  );
};

export default UserProfile;
