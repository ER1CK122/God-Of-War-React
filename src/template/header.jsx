import logo from '../assets/images/GODR1.png';
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <>
      <header className="flex">
        <div className="container">
          <div className="flex items-center">
            <Link to="/"><img src={logo} alt=""/></Link>
            <nav className="navbar">
              <ul>
                <li className="navbar-item"><Link to="personagens-page">Personagens</Link></li>
                <li className="navbar-item"><a href="#requisitos" target={'_parent'}>Requisitos</a></li>
                <li className="navbar-item"><a href="https://store.playstation.com/pt-br/concept/10001850" target={"_blank"} rel="noreferrer">Onde Compra</a></li>
                <li className="navbar-item"><Link to="login-page">Entrar</Link></li>
              </ul>
            </nav>
          </div>     
        </div>
      </header>
    </>
  );
}