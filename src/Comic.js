import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Comic(){
    const [img,setimg] = useState("")
    const [imag,setimag] = useState([])
    const { id } = useParams();
    useEffect(() => {
      setimag(fetchWelcomeContent());
    }, []);
  
    function fetchWelcomeContent() {
      axios.get(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3`)
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data);
    setimg(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension )
    const dobro =[];
  
    response.data.data.results.forEach(element => {
      dobro.push(<div className="hero-article" key={element.id}><div className="hero-article-img"><img src={element.thumbnail.path +"."+element.thumbnail.extension}></img><a href={element.urls[0].url}>{"NAME: "+element.title}</a><br/><div className="description">{"DESCRIPTION: "+ element.description }</div></div></div>);

    });
    setimag(dobro);
    console.log(dobro );
  })
  .catch(error => {
    // Manipule os erros aqui
    console.error(error);
  });
    }

    return(
      <div className="page">
        <div className="hero-article">
            <div className="hero-article-img"></div>
            <div className="hero-info"></div>
            {imag}
        </div>
      </div>
        
    )
}
export default Comic