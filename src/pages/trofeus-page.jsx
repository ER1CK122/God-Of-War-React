import React from 'react';
import Header from "../template/header";
import Footer from "../template/footer";
import TrofeuPlatina from "../assets/images/trofeus/trofeu-platina.png";
import TrofeuBronze from "../assets/images/trofeus/trofeu-bronze.png";
import TrofeuPrata from "../assets/images/trofeus/trofeu-prata.png";
import Trofeu1 from "../assets/images/trofeus/god-of-war-trofeu-1.png";
import Trofeu2 from "../assets/images/trofeus/god-of-war-trofeu-2.png";
import Trofeu3 from "../assets/images/trofeus/god-of-war-trofeu-3.png";
import Trofeu4 from "../assets/images/trofeus/god-of-war-trofeu-4.png";
import Trofeu5 from "../assets/images/trofeus/god-of-war-trofeu-5.png";
import Trofeu6 from "../assets/images/trofeus/god-of-war-trofeu-6.png";
import Trofeu7 from "../assets/images/trofeus/god-of-war-trofeu-7.png";
import Trofeu8 from "../assets/images/trofeus/god-of-war-trofeu-8.png";
import Trofeu9 from "../assets/images/trofeus/god-of-war-trofeu-9.png";
import Trofeu10 from "../assets/images/trofeus/god-of-war-trofeu-10.png";
import TrofeuComponent from '../components/trofeu';


export default function TrofeuPage() {
  return(
    <>
      <Header/>
      <main className='container pt-4 d-flex flex-collumn align-items-center justify-content-center w-100'>
        <TrofeuComponent trofeu={Trofeu1} titulo='O Urso e o Lobo' texto='Obtenha todos os troféus' nivelTrofeu={TrofeuPlatina}/>        
        <TrofeuComponent trofeu={Trofeu2} titulo='O Florista' texto='Obtenha uma flor de cada um dos Nove Reinos' nivelTrofeu={TrofeuBronze}/>        
        <TrofeuComponent trofeu={Trofeu3} titulo='O Bibliotecário' texto='Obtenha todos os livros' nivelTrofeu={TrofeuBronze}/>        
        <TrofeuComponent trofeu={Trofeu4} titulo='O Curador' texto='Obtenha todos os artefatos' nivelTrofeu={TrofeuBronze}/>        
        <TrofeuComponent trofeu={Trofeu5} titulo='Como Tudo Começou' texto='Equipe um Encantamento' nivelTrofeu={TrofeuBronze}/>        
        <TrofeuComponent trofeu={Trofeu6} titulo='Lustrado com Cuspe' texto='Aprimore uma peça de armadura' nivelTrofeu={TrofeuBronze}/>        
        <TrofeuComponent trofeu={Trofeu7} titulo='Estilo Espartano' texto='Recorda-te dos ensinamentos espartanos' nivelTrofeu={TrofeuPrata}/>        
        <TrofeuComponent trofeu={Trofeu8} titulo='Barriga Cheia' texto='Obtenha todas as Maçãs de Iðunn e Frascos de Hidromel Sangrento' nivelTrofeu={TrofeuPrata}/>        
        <TrofeuComponent trofeu={Trofeu9} titulo='Desenferrujando' texto='Compre uma habilidade' nivelTrofeu={TrofeuBronze}/>        
        <TrofeuComponent trofeu={Trofeu10} titulo='Um Conflito Selvagem' texto='Enfrente o urso' nivelTrofeu={TrofeuBronze}/>        
      </main>
      <Footer/>
    </>
  );       
}