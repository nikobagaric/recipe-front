import { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebar = () => {
    setSidebarOpen(prev => !prev)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div>
      <div className="navbar fixed rounded-b-full top-0 w-screen h-20 shadow-lg bg-main_red-100 z-10 overflow-x-hidden">
        <div className="navbar-container flex justify-evenly">
          <div className="hamburger" onClick={handleSidebar}>
            <span className={`line line1${sidebarOpen ? ' line1-active' : ''}`}></span>
            <span className={`line line2${sidebarOpen ? ' line2-active' : ''}`}></span>
            <span className={`line line3${sidebarOpen ? ' line3-active' : ''}`}></span>
          </div>
          <h1 className="text-white font-semibold mt-4 text-4xl">
            Recipe Website
          </h1>
        </div>
      </div>
      <div className="sidebar-container">
        <div className={`sidebar${sidebarOpen ? ' sidebar-active' : ''}`}>
          <ul className="sidebar-list">
            <li className="sidebar-list-a"><a href="" onClick={closeSidebar}><p className="sidebar-list-link">Link</p></a></li>
            <li className="sidebar-list-a"><a href="" onClick={closeSidebar}><p className="sidebar-list-link">Link</p></a></li>
            <li className="sidebar-list-a"><a href="" onClick={closeSidebar}><p className="sidebar-list-link">Link</p></a></li>
            <li className="sidebar-list-a"><a href="" onClick={closeSidebar}><p className="sidebar-list-link">Link</p></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
