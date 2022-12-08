import React from 'react';
import Header from "../template/header";
import Footer from "../template/footer";
import TrofeuPlatina from "../assets/images/trofeus/trofeu-platina.png";
import TrofeuBronze from "../assets/images/trofeus/trofeu-bronze.png";
import TrofeuPrata from "../assets/images/trofeus/trofeu-prata.png";
import TrofeuOuro from "../assets/images/trofeus/trofeu-ouro.png";
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
import Trofeu11 from "../assets/images/trofeus/god-of-war-trofeu-11.png";
import Trofeu12 from "../assets/images/trofeus/god-of-war-trofeu-12.png";
import Trofeu13 from "../assets/images/trofeus/god-of-war-trofeu-13.png";
import Trofeu14 from "../assets/images/trofeus/god-of-war-trofeu-14.png";
import Trofeu15 from "../assets/images/trofeus/god-of-war-trofeu-15.png";
import Trofeu16 from "../assets/images/trofeus/god-of-war-trofeu-16.png";
import Trofeu17 from "../assets/images/trofeus/god-of-war-trofeu-17.png";
import Trofeu18 from "../assets/images/trofeus/god-of-war-trofeu-18.png";
import Trofeu19 from "../assets/images/trofeus/god-of-war-trofeu-19.png";
import Trofeu20 from "../assets/images/trofeus/god-of-war-trofeu-20.png";
import Trofeu21 from "../assets/images/trofeus/god-of-war-trofeu-21.png";
import Trofeu22 from "../assets/images/trofeus/god-of-war-trofeu-22.png";
import Trofeu23 from "../assets/images/trofeus/god-of-war-trofeu-23.png";
import Trofeu24 from "../assets/images/trofeus/god-of-war-trofeu-24.png";
import Trofeu25 from "../assets/images/trofeus/god-of-war-trofeu-25.png";
import Trofeu26 from "../assets/images/trofeus/god-of-war-trofeu-26.png";
import Trofeu27 from "../assets/images/trofeus/god-of-war-trofeu-27.png";
import Trofeu28 from "../assets/images/trofeus/god-of-war-trofeu-28.png";
import Trofeu29 from "../assets/images/trofeus/god-of-war-trofeu-29.png";
import Trofeu30 from "../assets/images/trofeus/god-of-war-trofeu-30.png";
import Trofeu31 from "../assets/images/trofeus/god-of-war-trofeu-31.png";
import Trofeu32 from "../assets/images/trofeus/god-of-war-trofeu-32.png";
import Trofeu33 from "../assets/images/trofeus/god-of-war-trofeu-33.png";
import Trofeu34 from "../assets/images/trofeus/god-of-war-trofeu-34.png";
import Trofeu35 from "../assets/images/trofeus/god-of-war-trofeu-35.png";
import Trofeu36 from "../assets/images/trofeus/god-of-war-trofeu-36.png";
import TrofeuComponent from '../components/trofeu';


export default function TrofeuPage() {
  return(
    <>
      <Header/>
      <main className='container pt-4 pb-4 d-flex flex-collumn align-items-center justify-content-center w-100'>
        <div className='d-flex w-75 align-items-center'>
          <div>
            <div className='fs-2'>God of War Ragnarok</div>
            <div className='box-console color-black w-25 text-center'><strong>PS4</strong></div>
          </div>

          <div className='box-complete'></div>

          <div className='ms-auto d-flex align-items-center '>
            <div className='p-2'>
              <div className=''><img src={TrofeuPlatina} alt=""/></div>
              <div className='fs-2 text-center'>1</div>
            </div>
            <div className='p-2'>
              <div className=''><img src={TrofeuOuro} alt=""/></div>
              <div className='fs-2 text-center'>4</div>
            </div>
            <div className='p-2'>
              <div className=''><img src={TrofeuPrata} alt=""/></div>
              <div className='fs-2 text-center'>15</div>
            </div>
            <div className='p-2'>
              <img src={TrofeuBronze} alt=""/>
              <div className='fs-2 text-center'>16</div>
            </div>
          </div>
        </div>

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
        <TrofeuComponent trofeu={Trofeu11} titulo='Dívida de Sangue' texto='Enfrente o deus do trovão' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu12} titulo='Briga Familiar' texto='Enfrente a Valquíria misteriosa' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu13} titulo='Raiz do Problema' texto='Enfrente a Níðhögg' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu14} titulo='O Caldeirão' texto='Destrua o caldeirão de Grýla' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu15} titulo='Sem Coleira' texto='Enfrente Garm' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu16} titulo='Retribuição' texto='Enfrente Heimdall' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu17} titulo='Melhores Juntas' texto='Enfrente Hrist e Mist' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu18} titulo='Falange' texto='Obtenha todos os escudos' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu19} titulo='Coletor' texto='Obtenha todas as relíquias e punhos de espadas' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu20} titulo='Matador de Dragões' texto='Confeccione o Conjunto de Armadura de Escamas de Dragão' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu21} titulo='A História Agora' texto='Repare totalmente o Amuleto da Yggdrasil' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu22} titulo='Funeral de um Amigo' texto='Compareça ao funeral' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu23} titulo='Líder dos Rebeldes' texto='Devolva o martelo da rebelião' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu24} titulo='Novas Amizades' texto='Consiga o orbe de Lúnda' nivelTrofeu={TrofeuBronze}/>
        <TrofeuComponent trofeu={Trofeu25} titulo='Hafgufa Inteiro' texto='Liberte os Hafgufas' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu26} titulo='Corrigindo Erros' texto='Liberte o Lyngbakr' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu27} titulo='Foi um Bom Dia' texto='Recupere a Mardöll' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu28} titulo='Espécies Invasoras' texto='Faça todas as caçadas em cratera' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu29} titulo='Melhores Amigos' texto='Faça carinho em Speki e Svanna' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu30} titulo='Lugar de Direito' texto='Devolva todos os Lindwyrms para Ratatoskr' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu31} titulo='Coração Puro' texto='Devolva os Cervos das Quatro Estações' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu32} titulo='Teste de Fogo' texto='Conclua as Provas de Muspelheim' nivelTrofeu={TrofeuPrata}/>
        <TrofeuComponent trofeu={Trofeu33} titulo='Pronto para o Compromisso' texto='Aprimore totalmente um conjunto de armadura' nivelTrofeu={TrofeuOuro}/>
        <TrofeuComponent trofeu={Trofeu34} titulo='Ragnarök' texto='Enfrente o Pai-de-Todos' nivelTrofeu={TrofeuOuro}/>
        <TrofeuComponent trofeu={Trofeu35} titulo='Erro Grave' texto='Enfrente o Rei Hrólf' nivelTrofeu={TrofeuOuro}/>
        <TrofeuComponent trofeu={Trofeu36} titulo='A Verdadeira Rainha' texto='Enfrente Gná' nivelTrofeu={TrofeuOuro}/>
      </main>
      <Footer/>
    </>
  );       
}