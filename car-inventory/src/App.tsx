import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import AddCar from './components/AddCar';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/add-car">Add Car</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/car/:carId" element={<CarDetail carId={1} />} /> {}
        <Route path="/add-car" element={<AddCar />} />
      </Routes>
    </Router>
  );
};

export default App;
