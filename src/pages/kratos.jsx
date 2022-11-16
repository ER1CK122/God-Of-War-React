import Chaos from '../assets/images/chaos.jpg'
import Leviatan from '../assets/images/leviatan.jpg'
import '../assets/css/main.css'

function Kratos(){
  return(
    <>
      <h1 className="titulo mt-6 mb-6 "> As Principais Armas do Kratos em God of War: Ragnarök </h1>

      <div className="flex">
        <div className="mr-6 no-overflow hero relative">
          <img src={Leviatan} alt="" className="mr-6"/>
          
          <div className="block-feature flex flex-collumn end ">
            <div className= "moved p-16px">
              <h1 className="mb-6"><strong>Machado Leviathan</strong></h1>
              <p className=""><strong>Leviathan</strong> foi forjado pelos irmãos <strong>Brok</strong> e <strong>Sindri</strong> durante a guerra dos Aesir para restaurar o equilíbrio entre
                os reinos. Além disso, a dupla também foi responsável por outros artefatos como o anel dourado de Odin, o
                martelo de Thor, o porco dourado de Freya. Isso mostra que a arma vai ser um fator importante durante o jogo. 
              </p>
            </div>          
          </div>  
        </div>

        <div className="mr-6 no-overflow hero relative">
          <img src={Chaos} alt="" className="mr-6"/>
          
          <div className="block-feature flex flex-collumn end ">
            <div className= "moved p-16px">
              <h1 className="mb-6"> <strong>Lâminas do Caos</strong></h1>
              <p className="">As <strong>Lâminas do Caos</strong> são um par de lâminas presas a correntes criadas pelo Deus da Guerra,
                Ares. Ares mandou
                fazer as lâminas para dá-las a um servo que se provasse digno de seu serviço. Essas lâminas foram o primeiro
                par de lâminas com correntes que Kratos usou na série <strong>God of War</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kratos;