import '../tours/Tours.css';
import Tour from './tour/Tour';
import {Link} from "react-router-dom";
function Tours(props) {

    return (
      <div className='maino'>
       {props.DATA1.map(element=> {
        return(
            <div className='tour'>
     
       <Tour image={element.image} id = {element.id} name ={element.name} />
      </div>
        )
       })}
   
      </div>
    );
  }
  export default Tours;
