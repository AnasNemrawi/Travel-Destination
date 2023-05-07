
import '../tour/Tour.css'
import { Link } from 'react-router-dom'; 
function Tour(props) {
  return (
    
    <div className='super'>
       <Link to={`/city/${props.id}`} >
        <div key={props.id}>
          <h2>{props.name}</h2>
          <img src={props.image} alt={props.name} />
        </div>
       </Link>
    </div>
   
  );
}

export default Tour;
