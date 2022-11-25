import { Link } from "react-router-dom";

export default function CardPersonagen(props){
  return(
    <Link to={props.link} className="navimg-item no-overflow"><img src={props.image} alt=""/></Link>
  );
}