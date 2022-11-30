import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ListaPersonagens(){
  const [personagens, setPersonagens] = useState([]);

  const getPersonagens = async () => {
    try {
      const response = await axios.get("http://localhost/GOD-OF-WAR-BACK-END/api/lista-personagem.php");
      const data = response;
      setPersonagens(data);
      console.log(data)
    }  catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPersonagens();
  },[])


  let aPersonagens = []
    useEffect(() => {
      axios("http://localhost/GOD-OF-WAR-BACK-END/api/lista-personagem.php")
      .then((resp) => {resp.json()})
      .then((data) => {  
        console.log(data)
      }).catch((err) => console.log(err));   
    },[])


    return (
      <>
        <div>
teste
          {personagens.map((personagem) => {
            <div>{personagem.nomePersonagem}</div>
          })}

        </div>
      </>
    )
}