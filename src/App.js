import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex overflow-x-hidden">
        <Navbar />
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
