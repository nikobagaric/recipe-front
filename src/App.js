import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import tempdata from './components/RecipePost/tempdata';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

function App() {
  return (
    <Router>
      <div className="flex overflow-x-hidden">
        <Navbar />
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path ='/recipe/:id' element={<Recipe match={tempdata}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
