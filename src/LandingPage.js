import { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function  LandingPage() {
    const [optionsVisible, setOptionsVisible] = useState(false)
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    function handleHeroesClick() {

      navigate("/heroes");
    }
    function random() {
      navigate(`/heroes/${id}`);
    }
    function series() {
      navigate(`/series`);
    }
    function comics() {
      navigate(`/comics`);
    }
    function randomNumber() {
      return Math.floor(Math.random() * 1561); 
      
    }
    
    useEffect(() => {
      setId(fetchWelcomeContent());
      console.log(id)
    }, []);
  
    function fetchWelcomeContent() {
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3&offset=${randomNumber()}`)
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data.data.results[0].id);
    setId(response.data.data.results[0].id);
    return response.data.data.results[0].id;
  })
  .catch(error => {
    // Manipule os erros aqui
    console.error(error);
  });
  }

  return (
    <div className='body'>
      <div className='page'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
    <div class="content">
    <div class={`${ optionsVisible ? 'active' : 'banner-box'}`} onClick={handleHeroesClick} >
  <a>HEROES</a></div>
    <div class="big-box" onClick={comics}>
  <a>STORIES</a></div><div class="side"><div class="box" onClick={series}>
   <a>SERIES</a></div>
    <div class="box" onClick={random}>
   <a>RANDOM</a></div>
   </div>
   </div>       
      </div> 
   <a class="marvel">MARVEL</a>
    </div>
  );
}
export default LandingPage