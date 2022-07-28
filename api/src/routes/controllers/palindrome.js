 //Funcion para invertir el texto que envian por query
 
 function palindrome(text){
  let textTrim = '';
  let palindromeTrim = '';
  const palindrome = text.split('').reverse().join(''); // invierto el texto 
  
//itero por el texto para guardar cada letra en la variable textTrim para que queden sin espacios y pueda compararse
// con el texto invertido 
// Lo mismo hago con la variable palindromeTrim para guardar el texto invertido sin espacios y poder compararlo
  for(let i = 0; i < text.length ; i++){
    if(text[i] !== ' ') textTrim += text[i]
    if(palindrome[i] !== ' ') palindromeTrim += palindrome[i] 
   
  }
  //comparo si el texto es igual al texto invertido
  const isPalindrome = textTrim.includes(palindromeTrim);

  //  si es un palindromo agrego palindrome:true
   if(isPalindrome) return {
    text : palindrome,
    palindrome : true
   }
  return {
    text : palindrome,
    palindrome : false
  };
}

console.log(palindrome('luz azul'));
module.exports = {
    palindrome
}