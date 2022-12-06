import axios from "axios";
import React from "react";

export default function ListaPersonagens(){
  const [personagens, setPersonagens] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://192.168.0.27:80/GOD-OF-WAR-BACK-END/api/lista-personagem.php")
    .then((response) => {
      setPersonagens(response.data);
    }).catch((err) => {
      console.log("ERR")
      console.log(err)
    });
  },[]);

    return (
      <div>
        {personagens.map((personagem, index)=>(
          <div key={index}>
            <div>{personagem.id}</div>
            <div>{personagem.nomePersonagem}</div>
            <div>{personagem.mitologia}</div>
            <div>{personagem.nomeMitologia}</div>
          </div>
        ))}        
      </div>
    )
}