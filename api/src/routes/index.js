const { Router } = require('express');
const { palindrome } = require('./controllers/palindrome')
const router = Router();

router.get('/iecho' ,(req ,res) =>{
    //capturo lo que mandan por query 
    const { text } = req.query;
    //realizo una expresion regular para validar el texto que contenga solamente letras , espacios y acentos
    const regexText = /^[a-zA-Z\u00C0-\u017F\s]+$/g; 

    if(!regexText.test(text))return res.status(400).json({error: 'no text'});

    if(!text || text.length < 3)return res.status(400).json({error: 'no text'});

    const palindromeText = palindrome(text);
    res.status(200).json(palindromeText); // envío el texto invertido si pasan las validaciones
} )


module.exports = router;
