var palabras=["si","No","Tal Vez","Nunca","Piensalo mejor","Si yo fuera tu lo pensaria mejor","El tren pasa una vez en la vida, asi que es un rotundo SI","La duda de actuar es un si camuflajeado, te doy un empujon con un Si","Necesito que sientas la pregunta con mas fuerza no logro conectar contigo","No. Pero te dejo una reflexion al respecto, un No solo indica el inicio de un nuevo camino no el fin del mismo"];
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
