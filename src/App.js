import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import tempdata from './components/RecipePost/tempdata';

import Home from './pages/Home';
import Recipe from './pages/Recipe';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="flex overflow-x-hidden">
        <Navbar />
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>

        <Route path='/recipe/:id' element={<Recipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
