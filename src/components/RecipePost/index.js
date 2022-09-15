import './index.css'

const RecipePost = (props) => {
    return (
        <div className="recipe-post">
            <img className="recipe-post-image" src={props.image}/>
            <div className="recipe-body">
                <div className="recipe-body-header">
                    <a href={props.link}><h1 className="recipe-body-title">TEst{props.title}</h1></a>
                    <h2 className="recipe-body-h2 time">{props.time_minutes}</h2>
                    <h2 className="recipe-body-h2 cost">{props.cost}</h2>
                </div>
                <div className="recipe-body-description">
                    <p className="recipe-body-paragraph">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RecipePost