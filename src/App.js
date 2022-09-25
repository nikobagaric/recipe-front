import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";

import Home from './pages/Home';
import Recipe from './pages/Recipe';
import SignUp from './pages/SignUp';
import PostRecipe from './pages/PostRecipe';
import Users from './pages/Users'
import UserProfile from './pages/UserProfile';

const API_URL = '' // back-end url

function App() {
  return (
    <Router>
      <div className="flex overflow-x-hidden">
        <Navbar API_URL={API_URL} />
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<SignUp API_URL={API_URL}/>} />
        <Route path='/recipe/post' element={<PostRecipe API_URL={API_URL}/>} />
        <Route path='/users' element={<Users API_URL={API_URL}/>}/>

        <Route path='/user/:id' element={<UserProfile/>} />
        <Route path='/recipe/:id' element={<Recipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
