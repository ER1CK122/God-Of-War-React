import { Link } from "react-router-dom";

export default function LoginPage(){
  return(
    <div className="vh-100">
      <header className="d-flex w-100">
        <div className="d-flex ms-auto">
          <div className="mt-3">Você ainda não tem uma conta?</div>
          <Link to='/criar-conta-page'><button className="btn btn-primary ms-2 m-2">Criar Conta</button></Link>
        </div>
      </header>

      <main className="d-flex align-items-center justify-content-center w-100 vh-90">
        <div className="max-width">
          <h1 className="fs-2 mb-3">Entrar no <strong>God of War: Ragnarök</strong></h1>

          <form action="">
            <div className="mb-2">
              <input type="email" name="name-person" id="name-person" className="form-control mb-1 p-1" placeholder="E-mail..."/>
            </div>
            
            <div className="mb-2">
              <input type="password" name="password-person" id="password-person" className="form-control mb-1 p-1" placeholder="Senha..."/>
            </div>

            <Link to='/app-page'><button type="button" className="btn btn-outline-success">Entrar</button></Link>
          </form>
        </div>
      </main>
    </div>
  );
}