import './index.css'

const Navbar = () => {
    return (
        <div className="navbar fixed rounded-b-full top-0 w-screen h-20 shadow-lg bg-main_red-100 z-10">
            <div className="navbar-container flex justify-evenly">
                <input type="checkbox" name="" id=""/>
                <div className="hamburger">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <h1 className="text-white font-semibold mt-4 text-4xl">Recipe Website</h1>
            </div>
        </div>
    )
}

export default Navbar