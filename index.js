// Import stylesheets
import './style.css';
const url="https://sheet.best/api/sheets/28b91243-2303-44fb-94a3-d08308d764cb"
const formulario= document.getElementById("formulario");
const registro= document.getElementById("registro");
const exito= document.getElementById("exito");


/*const ver= document.getElementById("ver");
ver.addEventListener('click',async(e)=>{
  try{
    
    const respuesta= await fetch(url);
    const contenido=await respuesta.json()
  
    console.log(contenido)
   }catch(error){
     console.log(error)
  
   }
})
*/
formulario.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const url="https://sheet.best/api/sheets/28b91243-2303-44fb-94a3-d08308d764cb"
 try{
  const respuesta= await fetch(url,{
    method:'POST',
    mode:'cors',
    headers:{
      'conTent-Type':'application/json'
    },
    body:JSON.stringify({
      "Nombre": formulario.nombre.value,
      "Correo": formulario.correo.value,
      "Telefono":formulario.telefono.value
    })
  
  });
  const contenido=await respuesta.json()

  console.log(contenido)
 }catch(error){
   console.log(error)

 }
 
 //leer
 
  
  registro.classList.remove('activo')
  exito.classList.add('activo')
});