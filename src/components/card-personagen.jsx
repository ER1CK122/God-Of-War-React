import { Link } from "react-router-dom";

export default function CardPersonagen(props){
  return(
    <Link to={props.link} className="naving-item no-overflow w-md-48 w-xl-32 me-2 mb-2"><img src={props.image} alt=""/></Link>
  );
}