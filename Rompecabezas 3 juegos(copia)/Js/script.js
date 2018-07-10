const tablaElementos = document.getElementById( 'elementos' );
const tablaespacios = document.getElementById( 'tablero' );


var piezas = [
    {id: 1, x: 5, y: 5, color: "red"},
    {id: 2, x: 5, y: 150, color: "green"},
    {id: 3, x: 90, y: 75, color: "yellow"},
    {id: 4, x: 5, y: 295, color: "black"},
    {id: 5, x: 90, y: 220, color: "brown"},
    {id: 6, x: 5, y: 440, color: "white"},
    {id: 7, x: 90, y: 365, color: "gray"},
    {id: 8, x: 5, y: 585, color: "purple"},
    {id: 9, x: 90, y: 510, color: "turquoise"},
];
var espacios = [
    {id: 9, x: 7, y: 5, color: "turquoise"},       
    {id: 8, x: 7, y: 139, color: "purple"},        
    {id: 7, x: 7, y: 272, color: "gray"},        
    {id: 6, x: 221, y: 5, color: "white"},
    {id: 5, x: 221, y: 139, color: "brown"},
    {id: 4, x: 221, y: 272, color: "black"},
    {id: 3, x: 435, y: 5, color: "yellow"},
    {id: 2, x: 435, y: 139, color: "green"},
    {id: 1, x: 435, y: 272, color: "red"},
];

let currentlyDragging = null;
var contadorAciertos = 0;
var contadorErrores = 0;

piezas.forEach( function(pieza){
    newdiv = document.createElement("div");
    //newdiv.style.backgroundColor = ""+pieza.color;
    //myImage= document.createElement("img");
    //newdiv.setAttribute("src", "./img/peppa/"+pieza.id+".jpg");
    newdiv.style.backgroundImage = 'url("./img/peppa/'+pieza.id+'.jpg")'; 
    //newdiv.appendChild(myImage);
    
    newdiv.style.left = pieza.x+ "px";
    newdiv.style.top = pieza.y+ "px";
    newdiv.setAttribute("id", ""+pieza.id);
    console.log(pieza);
    
    tablaElementos.appendChild(newdiv);
    newdiv.addEventListener("touchstart", inicio, false);
    newdiv.addEventListener("touchend", soltar, false);
    newdiv.addEventListener("touchmove", mover, false);
});

espacios.forEach( function(espacio){
    newdiv = document.createElement("div");
    
    newdiv.style.backgroundColor = "transparent";
    //newdiv.innerHTML =""+espacio.id;
    newdiv.style.left = espacio.x+ "px";
    newdiv.style.top = espacio.y+ "px";
    newdiv.setAttribute("id", "t"+espacio.id);
    console.log(espacio + "yes");
    tablaespacios.appendChild(newdiv);
});

function inicio(eve){
    eXY = eve.target;
    console.log(eXY);
    div = document.getElementById(""+eve.target.id);
    console.log("Start " + eve.target.id + " " + eve);

    var oX=parseInt(div.style.left);
    var oY=parseInt(div.style.top);
    console.log(oY)
    // Calculamos la diferencia entre la posicion del div con la del raton.
}

function mover(eve){
    var touchLocation = eve.targetTouches[0];
    div.style.left = touchLocation.clientX + 'px';
    div.style.top = touchLocation.clientY + 'px';
}

function soltar(eve){
    currentlyDragging = eve.target;
    divEsp = document.getElementById(""+eve.target.id);
    tablEspacio  = document.getElementById("t"+eve.target.id);
    console.log("Movió a " + divEsp.style.backgroundColor);
    console.log("Movió a " + tablEspacio.style.borderColor);
    var arrastrar = (parseInt(tablaElementos.offsetWidth) - parseInt(divEsp.style.left) + 30)*-1;
    
    posxPieza = arrastrar;
    posyPieza = parseInt(divEsp.style.top);
    posxEspacio = parseInt(tablEspacio.style.left);
    posyEspacio = parseInt(tablEspacio.style.top);


    posicionfinal = posxEspacio + parseInt(tablaElementos.offsetWidth) + 30;

if (((posxEspacio -45) <= posxPieza) && ((posxEspacio + 50) >= posxPieza) && ((posyEspacio -50) <= posyPieza) && ((posyEspacio +45) >= posyPieza)){      console.log("Bien hecho!"); 
      divEsp.style.left = posicionfinal + 'px';
      divEsp.style.top = posyEspacio + 'px';
      divEsp.removeEventListener("touchstart", inicio, false);
      divEsp.removeEventListener("touchend", soltar, false);
      //div.removeEventListener("touchcancel", handleCancel, false);
      divEsp.removeEventListener("touchmove", mover, false);
      contadorAciertos++;
      if (contadorAciertos == 9){
        alert("GANASTE");
      }
    }else{
      console.log("Oops!");
      divEsp.style.left = piezas[eve.target.id-1].x + 'px';
      divEsp.style.top = piezas[eve.target.id-1].y + 'px';
      contadorErrores++;
      if (contadorErrores == 15){
        alert("PERDISTE");
      }
    }
    console.log("Fin del juego " +eve);
}
