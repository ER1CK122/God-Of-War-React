import '../assets/css/main.css'
import Header from '../template/header';
import Personagens from '../components/personagens';
import Titulo from '../components/titulo';
import Footer from '../template/footer';

export default function Root() {
  return (
    <>
      <Header/>
      
      <main className="container">
        <Titulo text="God of War: Ragnarök"/>

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

        <Titulo text="Os principais personagens de God of War: Ragnarök"/>

        <Personagens/>
        
        <div id="requisitos">
          <Titulo text="Requisitos para PC"/>
          
          <table>
            <thead>
              <tr>
                <th width="350px">Mínimos:</th>
                <th width="350px">Recomendados:</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                  <td><strong className="miniTitles">Requer um sistema operativo e processador de 64 bits</strong></td>
                  <td><strong className="miniTitles">Requer um sistema operativo e processador de 64 bits</strong></td>
              </tr>
              <tr>
                  <td><strong className="miniTitles">Sistema Operativo:</strong> Windows 10 64-bit</td>
                  <td><strong className="miniTitles">Sistema Operativo:</strong> Windows 10 64-bit</td>
              </tr> 
              <tr> 
                  <td><strong className="miniTitles">Processador:</strong> Intel i5-2500k (4 core 3.3 GHz)</td>
                  <td><strong className="miniTitles">Processador:</strong> Intel i5-6600k (4 core 3.5 GHz)</td>
              </tr>
              <tr> 
                  <td><strong className="miniTitles">Memória:</strong> 8 GB de RAM</td>
                  <td><strong className="miniTitles">Memória:</strong> 8 GB de RAM</td>
              </tr>
              <tr> 
                  <td><strong className="miniTitles">Placa gráfica:</strong> NVIDIA GTX 960 (4 GB) </td>
                  <td><strong className="miniTitles">Placa gráfica:</strong> NVIDIA GTX 1060 (6 GB)</td>
              </tr>
              <tr> 
                  <td><strong className="miniTitles">DirectX:</strong> Versão 11 </td>
                  <td><strong className="miniTitles">DirectX:</strong> Versão 11</td>
              </tr>
              <tr> 
                  <td><strong className="miniTitles">Espaço no disco:</strong> Requer 70 GB de espaço livre </td>
                  <td><strong className="miniTitles">Espaço no disco:</strong> Requer 70 GB de espaço livre</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer/>
    </>
  );
}