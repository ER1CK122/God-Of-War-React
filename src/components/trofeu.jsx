export default function TrofeuComponent(props){
  return(
    <div className='d-flex border w-75'>
      <div className='border-end p-2 d-flex align-items-center justify-content-center'><img src={props.trofeu} alt="" /></div>
      <div className='border-end w-100 ps-2 pe-2'>
        <div className='fs-4 fw-bold'>{props.titulo}</div>
        <div>{props.texto}</div>
      </div>
      <div className='d-flex align-items-center justify-content-center p-2'><img src={props.nivelTrofeu} alt="" /></div>
    </div>
  );
}