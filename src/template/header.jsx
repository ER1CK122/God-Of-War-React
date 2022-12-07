import logo from '../assets/images/GODR1.png';
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <>
      <header className="flex">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            <div className='w-35'><Link to="/"><img src={logo} alt=""/></Link></div>
            <nav className="navbar d-none d-lg-block">
              <ul>
                <li className="navbar-item"><Link to="/trofeu-page">Troféus</Link></li>
                <li className="navbar-item"><a href="#requisitos" target={'_parent'}>Requisitos</a></li>
                <li className="navbar-item"><a href="https://store.playstation.com/pt-br/concept/10001850" target={"_blank"} rel="noreferrer">Onde Compra</a></li>
                <li className="navbar-item"><a href='http://localhost/GOD-OF-WAR-BACK-END/app/login/login.php'>Entrar</a></li>
              </ul>
            </nav>
          </div>     
        </div>
      </header>
    </>
  );
}