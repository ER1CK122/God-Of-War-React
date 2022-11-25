import React from 'react';
import Chaos from '../assets/images/chaos.jpg'
import Leviatan from '../assets/images/leviatan.jpg'
import Titulo from '../components/titulo';
import Header from '../template/header';

export default function Kratos(){
  return(
    <>
      <Header/>

      <main className='container'>
        <Titulo text='As Principais Armas do Kratos em God of War: Ragnarök'/>

        <div className="d-md-flex h-100 w-100">
          <div className="no-overflow hero relative">
            <img src={Leviatan} alt=""/>
            <div className="block-feature flex flex-collumn end">
              <div className= "moved p-16px">
                <h1 className="mb-2"><strong>Machado Leviathan</strong></h1>
                <div className='paragrafo'><strong>Leviathan</strong> foi forjado pelos irmãos <strong>Brok</strong> e <strong>Sindri</strong> durante a guerra dos Aesir para restaurar o equilíbrio entre
                  os reinos. Além disso, a dupla também foi responsável por outros artefatos como o anel dourado de Odin, o
                  martelo de Thor, o porco dourado de Freya. Isso mostra que a arma vai ser um fator importante durante o jogo. 
                </div>
              </div>
            </div>
          </div>

          <div className='m-5'></div>
          <div className="no-overflow hero relative ms-auto">
            <img src={Chaos} alt=""/>
            
            <div className="block-feature flex flex-collumn end">
              <div className= "moved p-16px">
                <h1 className="mb-2"> <strong>Lâminas do Caos</strong></h1>
                <div className='paragrafo'>As <strong>Lâminas do Caos</strong> são um par de lâminas presas a correntes criadas pelo Deus da Guerra, 
                  Ares. Ares mandou fazer as lâminas para dá-las a um servo que se provasse digno de seu serviço. Essas lâminas 
                  foram o primeiro par de lâminas com correntes que Kratos usou na série <strong>God of War</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}