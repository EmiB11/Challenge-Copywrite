import axios from 'axios';
//Funcion que sirve para mandar el texto del input a la api y que nos devuelva el tecto invertido

export const palindrome = (text) =>async dispatch => {
    let getText; 
   try {
    
      getText =await axios.get(`http://localhost:3001/iecho?text=${text}`)

     return dispatch({type:'GET_PALINDROME' , payload: getText.data})
   }catch(error){
   
     return dispatch({type:'NO_PALINDROME' , payload: error.response.data})
   }
}

export const resetError = () =>{
    return {
        type:'RESET_ERROR'
    }
}