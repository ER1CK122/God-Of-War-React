import React, { useState } from 'react';
import ListItem from '../components/list-item';

export default function Sandbox(){
  let [item, setItem] = useState([]);

  function addList(){
    let texto = document.getElementById('text').value

    setItem([
      ...item,
      { id: Math.random, name: texto }
    ]);
  }

  function removeList(id){
    setItem(item => item.filter((i) => i !== id));
  }


  return(
    <main className='d-flex flex-column align-items-center justify-content-center vh-100 container'>
      <div className="d-flex mb-3">
        <form action="" className='me-2'>
          <input type="text" className="ps-2 rounded form-control"  id='text'/>
        </form>
        <button className="btn btn-outline-primary" onClick={()=>{addList()}}>Adicionar</button>
      </div>

      <ul className="list-group list-group-numbered w-25">
        {item.map((i, index) => (
          <ListItem key={index} text={i.name} click={()=>{removeList(i)}}/>
        ))}
      </ul>
    </main>
  );
}