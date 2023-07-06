import axios from "axios";
import { useEffect, useState } from "react";

function Heroes(){
    const [img,setimg] = useState("")
    const [Content,setContent] = useState([])
    useEffect(() => {
      setContent(fetchWelcomeContent());
    }, []);
  
    function fetchWelcomeContent() {
      axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcac4f8bc22f3164a313a4cf94d6ef57&hash=ccbc44ef33d6c777371e43d559225cc3')
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension);
    setimg(response.data.data.results[0].thumbnail.path +"."+response.data.data.results[0].thumbnail.extension )
    const dobro =[];
  
    response.data.data.results.forEach(element => {
      dobro.push(<div className="hero" key={element.id}><div className="hero-img"><img src={element.thumbnail.path +"."+element.thumbnail.extension}></img>{element.name}</div></div>);

    });
    setContent(dobro);
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
export default Heroes