import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginPage(){
  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(()=>{
    axios.get('http://192.168.0.27:80/GOD-OF-WAR-BACK-END/api/lista-usuarios.php')
      .then((response) => {
        setUsuarios(response.data);
        console.log('sucesso')
      }).catch((err)=>{
        console.log("Error")
        console.log(err)
      });
  }, [])

  function logar(){
    let inputEmail = document.querySelector('#email').value;
    let inputSenha = document.querySelector('#senha').value;

    let email = usuarios.map((i)=>(i.email));

    let senha = usuarios.map((i)=>(i.senha));

    console.log(email);

    for(let i=0; i<email.length; i++){
      if(inputEmail === email[i]){
        console.log("ok");
        for(let i=0; i<senha.length; i++){
          if(inputSenha === senha[i]){
            console.log("ok");
            window.location.href = "/app-page";
          }else{
            console.log(inputSenha);
            console.log(senha[i]);
          }
        }
      }else{
        console.log(inputEmail);
        console.log(email[i]);        
      }
    }  
  }

  return(
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex w-100">
        <div className="d-flex ms-auto">
          <div className="mt-3">Você ainda não tem uma conta?</div>
          <Link to='/criar-conta-page'><button className="btn btn-primary ms-2 m-2">Criar Conta</button></Link>
        </div>
      </div>

      <main className="d-flex align-items-center justify-content-center w-100 mb-auto mt-auto">
        <div className="max-width">
          <h1 className="fs-2 mb-3">Entrar no <strong>God of War: Ragnarök</strong></h1>

          <form action="" className="d-flex flex-column">
            <div className="mb-2">
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email" id="email" className="form-control mb-1 p-1"/>
            </div>
            
            <div className="mb-2">
              <label htmlFor="password">Senha:</label>
              <input type="text" name="password" id="senha" className="form-control mb-1 p-1"/>
            </div>
          </form>
          <button id='logar' type="button" className="btn btn-outline-success w-25" onClick={logar}>Entrar</button>
        </div>
      </main>
    </div>
  );
}