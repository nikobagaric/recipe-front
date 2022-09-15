import './index.css'
import tempdata from '../../components/RecipePost/tempdata'

import RecipePost from '../../components/RecipePost'

const Home = () => {
    const recipes = tempdata.map(recipe => {
        return(
            <RecipePost props={recipe} />
        )
    })

    return (
        <main className="home w-screen overflow-x-hidden">
            <div className="hero-container">
                <img src="images/food-hero.jpg" className="hero-image opacity-90 object-cover" />
                <div className="search-box w-screen absolute left-0">
                    <h1 className="search-text mb-10 text-7xl">Find a Recipe</h1>
                    <input placeholder='Find a recipe' className="search-box opacity-50 rounded-full
                    w-96 h-14 p-1 px-7 text-2xl text-black placeholder:text-black placeholder:text-opacity-100 text-opacity-100"></input>
                </div>
            </div>
            <div className="recipes-container">
                {recipes}
            </div>
        </main>
    )
}

export default Home