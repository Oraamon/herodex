import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Heroes from './Heroes';
import Hero from './Hero';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} /> 
        <Route exact path='/heroes' element={<Heroes/>}></Route>
        <Route path='hero/:id' element={<Hero/>}></Route>

      </Routes>
  </Router>
  );
}

export default App;
