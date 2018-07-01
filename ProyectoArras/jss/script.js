

var div= document.getElementById("arrastrar");

movimiento=function()
{
	// Estas variables obtienen la diferencia en pixels entre el punto del raton
	// pulsado dentro del div y el top y left del elemento. Es para que cuando 
	// realizemos el movimiento, el cursor del raton siempre este en la misma
	// posición dentro del div que mueve.
	difX=0;
	difY=0;
 
	// Creamos el evento en el div para controlar la pulsación sobre el elemento
	// cuando se pulsa sobre el elemento se ejecuta la funcion inicio()
	div.addEventListener('touchstart',inicio,false);
 
	// Iniciamos el arrastre
	function inicio(e)
	{
        console.log("assad")
           console.table(e)
		// Obtenemos la posición del raton
        
		//var eX=e.pageX;
        var eX = e.target.clientLeft;
		//var eY=e.pageY;
        var eY = e.target.clientTop;
        console.log(eX)
		// Obtenemos los valores de la posicion left y top del elemento
		var oX=parseInt(div.style.left);
		var oY=parseInt(div.style.top);
        console.log(oY)
		// Calculamos la diferencia entre la posicion del div con la del raton.
		difX=oX-eX;
		difY=oY-eY;
 
		// Cremos los eventos mousemove y mouseup
		document.addEventListener('touchmove',mover,false);
		document.addEventListener('touchend',soltar,false);
	}
 
	// Movemos el elemento por la pantalla cada vez que se mueve el cursor
	function mover(e)
	{
        //console.log("hola")
		//var tY= e.target.clientTop + difX;
		//var tX= e.target.clientLeft +difY;
		//div.style.top= tX;
		//div.style.left= tY;
        
        
var touchLocation = e.targetTouches[0];
        div.style.left = touchLocation.clientX + 'px';
        div.style.top = touchLocation.clientY + 'px';
        
        
	}
 
	// Funcion que se ejecuta el botón del ratón
	function soltar(e)
	{
		// Eliminamos los eventos creados en la funcion inicio
		document.removeEventListener('touchmove',mover,false);
		document.removeEventListener('touchend',soltar,false);
	}
}
 
// Inicializamos el movimiento del div con id "arrastrar"

var recu1=new movimiento();