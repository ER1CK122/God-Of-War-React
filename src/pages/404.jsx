import { Link } from "react-router-dom";

export default function NotFind(){
  return(
    <main className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="f-5 fw-bold branding-color">Atenção</h1>
      <div className="fs-5 m-3 text-center">Essa pagina <span className="branding-color fw-bold">não existe</span> ou foi <span className="branding-color fw-bold">removida</span> do nosso sistema<br/> volte a tela de inicio cliquando no botão abaixo</div>
      <Link to='/'><button className="btn btn-outline-primary">Clique aqui</button></Link>
    </main>
  );
}