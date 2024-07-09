/*var citaForm=[]
var actual = 0;
var fotos=[]

var fondos =[
    "uno.png","dos.png", "tres.png","cuatro.png","cinco.png","seis.png",
     "siete.png","ocho.png","nueve.png","diez.png"]
function cambioFondo()
{ document.body.style.backgroundImage
   if(window.location.pathname.includes("pages"))
    document.body.style.backgroundImage = `url(../src/img/${fondos[actual]})`;
    else
    document.body.style.backgroundImage = `url(./src/img/${fondos[actual]})`;      
    actual = (actual + 1) % fondos.length;
    
}
setInterval (cambioFondo,2000)
cambioFondo () */.

  function enviarFormularioCita() {
  let nombre=document.getElementById("nombre").value 
  let telefono=document.getElementById("telefono").value
  let mail=document.getElementById("mail").value

if(nombre && telefono && mail) {
let objeto={nombre,telefono,mail}
citaForm.push(objeto) 
  }
  console.log(citaForm)
  } 
  
  
  function enviarFormularioFoto(){
let fotito1=document.getElementById("fotito1")
let fotito2=document.getElementById("fotito2")
if (fotito1 && fotito2){
    
    fotos.push(fotito1)
    fotos.push(fotito2)

}
console.log(fotos)
  }
