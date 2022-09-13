const Home = () => {
    return (
        <main className="home">
            <div className="hero-container">
                <img className="hero-image" />
                <div className="search-box">
                    <h1 className="search-text">Find a Recipe</h1>
                    <input className="search-box"></input>
                </div>
            </div>
            <div className="recipes-container">
            </div>
        </main>
    )
}

export default Home