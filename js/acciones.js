var palabras=["si","No","Tal Vez","Nunca","Piensalo mejor","Si yo fuera tu no haria eso","El tren pasa una vez en la vida, asi que es un rotundo SI","La duda de actuar es un si camuflajeado, te doy un empujon con un Si"];
var aleatorio;
const minimo=0;
const maximo=palabras.length;
var ventana=document.getElementById("ventana");

const ejecutar=()=>{
    aleatorio= parseInt(Math.random()*(maximo - minimo));
    ventana= palabras[aleatorio];
    console.log(ventana);
    document.getElementById("ventana").value=ventana;
}