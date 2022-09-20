import './index.css'
import tempdata from '../../components/RecipePost/tempdata'
//import { BiSearchAlt } from 'react-icons/bi'

import RecipePost from '../../components/RecipePost'
import { useState, useEffect, useMemo } from 'react'

const Home = () => {
    const recipesMap = tempdata.map(recipe => {
        return (
            <RecipePost props={recipe} />
        )
    })
    const [recipes, setRecipes] = useState(recipesMap)
    const [searchData, setSearchData] = useState("")

    useEffect(() => {
        setRecipes(tempdata
            .filter(recipe => recipe.title.includes(searchData) ||
                                recipe.title.toLowerCase().includes(searchData) ||
                                recipe.ingredients.includes(searchData) ||
                                recipe.tags.includes(searchData) ||
                                searchData === '')
            .map(recipe => { return (<RecipePost props={recipe} />) })
        )
    }, [searchData])

    const handleChange = (event) => {
        const { value } = event.target
        setSearchData(value)
    }

    return (
        <main className="home w-screen">
            <div className="hero-container">
                <div className='hero-image-container'>
                    <img src="images/food-hero.jpg" className="hero-image opacity-90 object-cover" />
                </div>
                <div className="search-box w-screen absolute left-0">
                    <h1 className="search-text mb-10 text-7xl">Find a Recipe</h1>
                    <input
                        placeholder='Find a recipe'
                        className="search-input"
                        name="searchData"
                        value={searchData}
                        onChange={handleChange}></input>
                </div>
            </div>
            <div className="recipes-container">
                { recipes }
            </div>
        </main>
    )
}

export default Home