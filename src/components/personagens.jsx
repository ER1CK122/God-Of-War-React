import CardPersonagen from "./card-personagen";
import React from 'react';
import axios from "axios";

export default function Personagens(){
  const [image, setImage] = React.useState([]);

  React.useEffect(()=>{
    axios.get("http://192.168.0.27:80/GOD-OF-WAR-BACK-END/api/lista-personagem.php")
    .then((reponse) =>{
      setImage(reponse.data);
    }).catch((err)=>{
      console.log("ERROR")
      console.log(err)
    });
  }, [])



  return(
    <div className="d-md-flex flex-wrap">
      {image.map((image, index) => (
        <div key={index}>
          <CardPersonagen link='/kratos-page' image={image.imagem}/>
        </div>
      ))}
    </div>
  );       
}