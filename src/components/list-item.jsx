export default function ListItem(props){
  return(
    <div className="list-group-item d-flex" key={props.key}>
      <li className="ms-2 overflow-auto" >{props.text}</li>
      <button className="ms-auto remove" onClick={props.click}>excluir</button>
    </div>
  );
}