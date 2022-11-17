export default function CardPersonagen(props){
  return(
    <a href={props.link} className="navimg-item no-overflow"><img src={props.image} alt=""/></a>
  );
}