
var actual = 0;

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
cambioFondo ()