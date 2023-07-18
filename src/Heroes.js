import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Heroes(){
    const [img,setimg] = useState("")
    const [Content,setContent] = useState([])
    const navigate = useNavigate();
    var offset = 0;


    
    function handleHeroClick(key) {
      navigate("/heroes/"+key);
    }
    const handleScroll = (e) =>{
      console.log('gi')
      if(
        window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight
      ){
        const params = new URLSearchParams(window.location.search);
      const txtValue = params.get('txt');
        offset += 1;
        if(txtValue != null){
          LoadMore2(txtValue,offset*20);
        }
        else LoadMore(offset*20);
      }
      
    }

    useEffect(() => {
      
      const params = new URLSearchParams(window.location.search);
      const txtValue = params.get('txt');
      console.log(txtValue);
      if(txtValue != null){
        fetchWelcomeContent2(txtValue);
      }
      else{
        fetchWelcomeContent();
      } 
      window.addEventListener("scroll",handleScroll);
    }, []);
  
    function fetchWelcomeContent2(txtValue) {
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3&nameStartsWith=${txtValue}`)
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension);
    setimg(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension )
    const dobro =[];
  
    response.data.data.results.forEach(element => {
      Content.push(<div className="hero" onClick={() =>handleHeroClick(element.id)} key={element.id}><div className="hero-img"><img src={element.thumbnail.path +"."+element.thumbnail.extension}></img>{element.name}</div></div>);

    });
    setContent(Content);
    console.log(Content );
  })
  .catch(error => {
    // Manipule os erros aqui
    console.error(error);
  });
    }
    function fetchWelcomeContent() {
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3`)
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension);
    setimg(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension )
    const dobro =Content;
  
    response.data.data.results.forEach(element => {
      dobro.push(<div className="hero" onClick={() =>handleHeroClick(element.id)} key={element.id}><div className="hero-img"><img src={element.thumbnail.path +"."+element.thumbnail.extension}></img>{element.name}</div></div>);

    });
    setContent(dobro);
    console.log(Content );
  })
  .catch(error => {
    // Manipule os erros aqui
    console.error(error);
  });
    }
    function LoadMore(offset) {
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3&offset=${offset}`)
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension);
    setimg(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension )
    const dobro = Content;
  
    response.data.data.results.forEach(element => {
      dobro.push(<div className="hero" onClick={() =>handleHeroClick(element.id)} key={element.id}><div className="hero-img"><img src={element.thumbnail.path +"."+element.thumbnail.extension}></img>{element.name}</div></div>);

    });
    setContent(dobro);
    console.log(Content );
  })
  .catch(error => {
    // Manipule os erros aqui
    console.error(error);
  });
    }
    function LoadMore2(name,offset) {
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3&offset=${offset}&nameStartsWith=${name}`)
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data.data.results);
 
    const dobro = Content;
  
    response.data.data.results.forEach(element => {
      if(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension != undefined){
        dobro.push(<div className="hero" onClick={() =>handleHeroClick(element.id)} key={element.id}><div className="hero-img"><img src={element.thumbnail.path +"."+element.thumbnail.extension}></img>{element.name}</div></div>);
      }
     

    });
    setContent(dobro);
    console.log(Content );
  })
  .catch(error => {
    // Manipule os erros aqui
    console.error(error);
  });
    }

    return(
   
      <div className='page' >
      <div className="search-box">
        <form name="search">
          <input type="text" className="input" name="txt" />
        </form>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fas fa-search" />
      </div>

        <div className="heroes-container" >
            <ul>
                {Content}
            </ul>
            <div className="loader">
            <svg className="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
			<stop offset="0%" stopColor="hsl(313,90%,55%)" />
			<stop offset="100%" stopColor="hsl(223,90%,55%)" />
		</linearGradient>
		<linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stopColor="hsl(313,90%,55%)" />
			<stop offset="100%" stopColor="hsl(223,90%,55%)" />
		</linearGradient>
	</defs>
	<circle className="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" strokeWidth="36" strokeDasharray="0 257 1 257" strokeDashoffset="0.01" strokeLinecap="round" transform="rotate(-90,100,100)" />
	<line className="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" strokeWidth="36" strokeDasharray="1 165" strokeLinecap="round" />
</svg>
            </div>
        </div>
      </div>

    )
}
export default Heroes