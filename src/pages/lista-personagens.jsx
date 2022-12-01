import axios from "axios";
import React from "react";

export default function ListaPersonagens(){
  const [personagens, setPersonagens] = React.useState();

  React.useEffect(()=>{
    axios.get("http://192.168.0.27:80/GOD-OF-WAR-BACK-END/api/lista-personagem.php")
    .then((response) => {
      setPersonagens(response.data);
    });
  },[]);

    return (
      <div>
        teste
        <div>{personagens?.id}</div>
        <div>{personagens?.nomePersonagem}</div>
        <div>{personagens?.mitologia}</div>
        <div>{personagens?.nomeMitologia}</div>
      </div>
    )
}