import CardPersonagen from "./card-personagen";
import KratosImage from '../assets/images/Kratos.jpg'
import AtreusImage from '../assets/images/Atreus.jpg'
import MimirImage from '../assets/images/Mimir.jpg'
import FreyaImage from '../assets/images/Freya.jpg'
import BrokImage from '../assets/images/Brok.jpg'
import SindriImage from '../assets/images/Sindri.jpg'
import DurlinImage from '../assets/images/Durlin.jpg'
import TyrImage from '../assets/images/Tyr.jpg'
import ThorImage from '../assets/images/Thor.jpg'
import AngrbodaImage from '../assets/images/Angrboda.jpg'

export default function Personagens(){
  return(
    <div className="grid grid-cols-3 grid-gap">
      <CardPersonagen link='kratos-page' image={KratosImage}/>
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