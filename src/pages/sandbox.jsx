import React from 'react';
import ListItem from '../components/list-item';

export default function Sandbox(){

  return(
    <>  
      <main className='d-flex flex-column align-items-center justify-content-center vh-100 container'>
        <div className="d-flex mb-3">
          <form action="" className='me-2'>
            <input type="text" className="ps-2 rounded form-control"/>

          </form>
          <button className="btn btn-outline-primary" onClick={()=>{}}>Adicionar</button>
        </div>

        <ul className="list-group list-group-numbered w-25">
          <ListItem text='Vasco'/>
        </ul>

      </main>
    </>
  );
}