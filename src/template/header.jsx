import logo from '../assets/images/GODR1.png';

function Header(){
  return(
    <header className="flex">
      <div className="container">
        <div className="flex items-center">
          <a href="#inicio"><img src={logo} alt=""/></a>
          <nav className="navbar">
            <ul>
              <li className="navbar-item"><a href="pages/personagens.php">Personagens</a></li>
              <li className="navbar-item"><a href="#requisitos" target="">Requisitos</a></li>
              <li className="navbar-item"><a href="https://store.playstation.com/pt-br/concept/10001850" target={"_blank"} rel="noreferrer">Onde Compra</a></li>
              <li className="navbar-item"><a href="../app/login/login.php">Entrar</a></li>
            </ul>
          </nav>
        </div>     
      </div>
    </header>
  );
}

export default Header;