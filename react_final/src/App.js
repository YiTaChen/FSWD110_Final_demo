
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Your_Pet from './pages/Your_Pet';
import Meet_Pet_Friend from './pages/Meet_Pet_Friend';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
     

     <Router>
     <nav>

        <Link to="/home">Home</Link> | 
    
        <Link to="/Your_Pet">Your_Pet</Link> | 
        <Link to="/Meet_Pet_Friend">Meet_Pet_Friend</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Your_Pet" element={<Your_Pet />} />
        <Route path="/Meet_Pet_Friend" element={<Meet_Pet_Friend />} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
