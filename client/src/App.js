
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import NavBar from './NavBar'
import {useSelector ,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {resetError} from './actions'



//Configuro un componente con material UI donde se almacena el texto invertido
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}));

function App() {

 const dispatch = useDispatch() 
 const  apiPalindrome = useSelector(state => state.apiResponse)
 const noText = useSelector(state => state.noText)

//utilizo un useEffect para actualizar el componente cuando se agrega un texto nuevo al arreglo 
 useEffect(()=>{
  console.log(apiPalindrome)
 },[apiPalindrome , noText])



  return (
    <div style={{backgroundColor:'#d9d9d9', height:'100vh'}}>

    <NavBar />

    <div className="container-md border" style={{backgroundColor:'white' ,height:'70%', width:'70%' , marginTop:'30px' , alignItems:'center'}}>

      <h2 style={{marginTop:'20px'}}>Results:</h2>

    <Box sx={{ width: '70%' }} style={{margin:'auto'}} >

      <Stack spacing={2}>

        {/*Realizo el mapeo del arreglo que esta almacenado en el estado de redux para obtener todos 
        los textos invertidos que se van agregando provenientes de la api*/ }

       {apiPalindrome?.map((element,index) => 
          <div  key={index} style={{display:'flex' }}>
          <Item style={{width:'100%' }}>
          <p style={{fontSize:'18px'}}>{element.text}</p>
          </Item>
          {/*Este tag sirve para que diferencie los que son palindromos */}
          <Alert severity={element.palindrome ? "success" : "warning"} style={{width:'35%' }}>{element.palindrome ? "Palindrome" : "No Palindrome"}</Alert>
          </div>
       )
      }
      {/*Cuando un texto no es valido aparece este alerta que muestra un error  */}
      {noText && 
                   <Alert severity="error" onClose={()=> dispatch(resetError()) }>
                    <AlertTitle>Error</AlertTitle>
                    <strong>{noText.error}</strong>
                   </Alert>
       
      }
      </Stack>
    </Box>
    </div>
      
    </div>
  );
}

export default App;
