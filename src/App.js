import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Heroes from './Heroes';
import Hero from './Hero';
import Series from './Series';
import Serie from './Serie';
import Comics from './Comics';
import Comic from './Comic';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} /> 
        <Route exact path='/heroes' element={<Heroes/>}></Route>
        <Route path='heroes/:id' element={<Hero/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/series/:id' element={<Serie/>}></Route>
        <Route path='/comics' element={<Comics/>}></Route>
        <Route path='/comics/:id' element={<Comic/>}></Route>
      </Routes>
  </Router>
  );
}

export default App;
