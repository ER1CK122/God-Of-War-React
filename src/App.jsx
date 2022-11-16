import './assets/css/main.css'
import CardPersonagen from './components/card-personagen';
import KratosImage from './assets/images/Kratos.jpg'
import AtreusImage from './assets/images/Atreus.jpg'
import MimirImage from './assets/images/Mimir.jpg'
import FreyaImage from './assets/images/Freya.jpg'
import BrokImage from './assets/images/Brok.jpg'
import SindriImage from './assets/images/Sindri.jpg'
import DurlinImage from './assets/images/Durlin.jpg'
import TyrImage from './assets/images/Tyr.jpg'
import ThorImage from './assets/images/Thor.jpg'
import AngrbodaImage from './assets/images/Angrboda.jpg'
import Header from './template/header';
function App() {
  return (
    <>
      <Header/>
      
      <main className="container vh-100">
        <h1 className="titulo mt-6 mb-6">God of War: Ragnarök</h1>

        <p><strong>God od War</strong> é uma série de jogos eletrônicos de ação-aventura criada por David Jaffe da
        <strong> Santa Monica Studio</strong>, da Sony. Iniciada em 2005 no console PlayStation 2
        <em><strong> (PS2)</strong></em>, tornou-se carro-chefe para a marca PlayStation, consistindo em oito jogos em
        várias plataformas, com um nono atualmente em desenvolvimento. Baseada em distintas mitologias, a história
        segue Kratos, um guerreiro espartano que foi levado a matar sua família por seu antigo mestre, o deus da
        guerra Ares. Isso desencadeia uma série de eventos que levam à guerras com os panteões mitológicos. A era da
        mitologia grega da série mostra <strong>Kratos</strong> seguindo um caminho de vingança devido às maquinações
        dos deuses do Olimpo, enquanto a era da mitologia nórdica, que apresenta seu filho Atreus como protagonista
        secundário, mostra um Kratos mais velho em um caminho de redenção, o que inadvertidamente coloca os dois em
        conflito com os deuses nórdicos.</p>

        <div className="bloco-titulo mt-6 mb-6">
          <h1 className="titulo">Os principais personagens de God of War: Ragnarök</h1>
        </div>

        <div class="grid grid-cols-3 grid-gap">
          <CardPersonagen link="./pages/kratos.jsx" image={KratosImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={AtreusImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={MimirImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={FreyaImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={BrokImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={SindriImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={DurlinImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={TyrImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={ThorImage}/>
          <CardPersonagen link="./pages/kratos.jsx" image={AngrbodaImage}/>
        </div>
        <div id="requisitos">
          <h1 class="titulo mb-6 mt-6 ">Requisitos para PC</h1>
          
          <table>
            <thead>
              <tr>
                <th width="350px">Mínimos:</th>
                <th width="350px">Recomendados:</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                  <td><strong class="miniTitles">Requer um sistema operativo e processador de 64 bits</strong></td>
                  <td><strong class="miniTitles">Requer um sistema operativo e processador de 64 bits</strong></td>
              </tr>
              <tr>
                  <td><strong class="miniTitles">Sistema Operativo:</strong> Windows 10 64-bit</td>
                  <td><strong class="miniTitles">Sistema Operativo:</strong> Windows 10 64-bit</td>
              </tr> 
              <tr> 
                  <td><strong class="miniTitles">Processador:</strong> Intel i5-2500k (4 core 3.3 GHz)</td>
                  <td><strong class="miniTitles">Processador:</strong> Intel i5-6600k (4 core 3.5 GHz)</td>
              </tr>
              <tr> 
                  <td><strong class="miniTitles">Memória:</strong> 8 GB de RAM</td>
                  <td><strong class="miniTitles">Memória:</strong> 8 GB de RAM</td>
              </tr>
              <tr> 
                  <td><strong class="miniTitles">Placa gráfica:</strong> NVIDIA GTX 960 (4 GB) </td>
                  <td><strong class="miniTitles">Placa gráfica:</strong> NVIDIA GTX 1060 (6 GB)</td>
              </tr>
              <tr> 
                  <td><strong class="miniTitles">DirectX:</strong> Versão 11 </td>
                  <td><strong class="miniTitles">DirectX:</strong> Versão 11</td>
              </tr>
              <tr> 
                  <td><strong class="miniTitles">Espaço no disco:</strong> Requer 70 GB de espaço livre </td>
                  <td><strong class="miniTitles">Espaço no disco:</strong> Requer 70 GB de espaço livre</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

    </>
  );
}

export default App;
