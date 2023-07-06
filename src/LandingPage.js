import { useState } from 'react';
import './App.css';

function  LandingPage() {
    const [optionsVisible, setOptionsVisible] = useState(false)
  return (
    <div className="App">
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
    <div class="content">
    <div class={`${ optionsVisible ? 'active' : 'banner-box'}`} >
  <a>HEROES</a></div>
    <div class="big-box">
  <a>STORIES</a></div><div class="side"><div class="box">
   <a>SERIES</a></div>
    <div class="box">
   <a>RANDOM</a></div>
   </div>
   </div>
   <a class="marvel">MARVEL</a>
    </div>
  );
}
export default LandingPage