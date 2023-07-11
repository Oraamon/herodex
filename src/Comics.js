import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Comics(){
    const [img,setimg] = useState("")
    const [Content,setContent] = useState([])
    const navigate = useNavigate();
    
    function handleHeroClick(key) {
      navigate("/comics/"+key);
    }


    useEffect(() => {
      setContent(fetchWelcomeContent());
    }, []);
  
    function fetchWelcomeContent() {
      axios.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3')
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension);
    setimg(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension )
    const dobro =[];
  
    response.data.data.results.forEach(element => {
      Content.push(<div className="hero" onClick={() =>handleHeroClick(element.id)} key={element.id}><div className="hero-img"><img src={element.thumbnail.path +"."+element.thumbnail.extension}></img>{element.title}</div></div>);

    });
    setContent(Content);
    console.log(dobro );
  })
  .catch(error => {
    // Manipule os erros aqui
    console.error(error);
  });
    }

    return(
        <div className="heroes-container">
            <ul>
                {Content}
            </ul>
        </div>
    )
}
export default Comics