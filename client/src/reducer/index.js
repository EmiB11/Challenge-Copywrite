const initialState = {
    apiResponse : [],
    noText : null
}

export default function rootReducer(state = initialState , action){
    switch(action.type){
        case 'GET_PALINDROME': return {
            ...state,
            //si la propiedad apiResponse no tiene nada guardamos en el arreglo solamente los datos que vienen de la api
            //pero si ya tiene datos ,agregamos los datos que ya tenía al final del arreglo y los datos nuevos al principio
            apiResponse: state.apiResponse?.length ? [action.payload, ...state.apiResponse] : [action.payload]
        }
        case 'NO_PALINDROME': return {
            ...state,
            //cuando el texto no es valido utilizamos esta accion
            noText: action.payload
        }
        case 'RESET_ERROR': return {
            ...state,
            //vuelve el valor a null para que podamos eliminar la alerta 
            noText: null
        }
      default: return state
    }
}