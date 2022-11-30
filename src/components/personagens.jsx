import CardPersonagen from "./card-personagen";
import KratosImage from '../assets/images/Kratos.png'
import AtreusImage from '../assets/images/Atreus.png'
import MimirImage from '../assets/images/Mimir.png'
import FreyaImage from '../assets/images/Freya.png'
import BrokImage from '../assets/images/Brok.png'
import SindriImage from '../assets/images/Sindri.png'
import DurlinImage from '../assets/images/Durlin.png'
import TyrImage from '../assets/images/Tyr.png'
import ThorImage from '../assets/images/Thor.png'
import AngrbodaImage from '../assets/images/Angrboda.png'

export default function Personagens(){
  return(
    <div className="d-md-flex flex-wrap">
      <CardPersonagen link='/kratos-page' image={KratosImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={AtreusImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={MimirImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={FreyaImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={BrokImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={SindriImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={DurlinImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={TyrImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={ThorImage}/>
      <CardPersonagen link="../pages/kratos.jsx" image={AngrbodaImage}/>
    </div>
  );       
}