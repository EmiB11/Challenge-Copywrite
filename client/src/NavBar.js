
import React ,{useState}from 'react';
import {useDispatch} from 'react-redux';
import {palindrome} from './actions';
export default function NavBar() {
  const [text , setText] = useState('');
  const dispatch = useDispatch();

//funcion que sirve para guardar lo que se escribe en el input y guardarlo en un estado local 
  const handleChange = (e) => {
     setText(e.target.value)
  }
//Funcion que sirve para mandar el texto del input a la api y que la api lo devuelva invertido
  const handleSubmit = (e) => {
   e.preventDefault()
   dispatch(palindrome(text.toLowerCase()))
   e.target.reset();
   
  }

  return (
    <nav className="navbar " style={{backgroundColor:'#e63946'}}>
  <div className="container-fluid ">
    <form className="d-flex  w-50 p-2 mx-auto" role="search" onSubmit={handleSubmit}>
    <input className="form-control me-2" type="search" placeholder="Insert text" aria-label="Search" onChange={handleChange}/>
      <button className="btn" style={{backgroundColor:'#3f37c9' , color:'#4895ef', marginLeft:'10px', width:'100px'}} type="submit">Send</button>
    </form>
  </div>
</nav>
  )
}
