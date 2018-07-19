class Usuario{
    constructor(user, pass, puntaje,rompecabeza){
        this.user=user;
        this.pass=pass;
        this.puntaje=puntaje;
        var arrRompecabezas=[];
        rompecabeza.forEach( function(rompecbz){
            arrRompecabezas.push(new Rompecabeza(rompecbz.piezas, rompecbz.espacios));
        });
        this.rompecabeza=arrRompecabezas;
    }
}

class Rompecabeza{
    constructor(piezas,espacios){
        var arrPiezas=[];
        piezas.forEach( function(pieza){
            arrPiezas.push(new Piezas(pieza.id, pieza.posx,pieza.posy,pieza.url));
        });
        this.piezas=arrPiezas;
                       
        var arrEspacios=[];
        espacios.forEach( function(espacio){
            arrEspacios.push(new Espacios(espacio.id, espacio.posx,espacio.posy,espacio.url));
        });               
        this.espacios=arrEspacios;
    }
    
}
class Piezas {
    constructor(id, posx, posy, url){
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.url = url;
    }
}
class Espacios {
    constructor(id, posx, posy, url){
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.url = url;
    }
}

    var arrUsers= [];
    
    $.getJSON('ejemplo.json', function(data){
        
        $.each(data, function(i, resultado){
          arrUsers.push(new Usuario(resultado.user, resultado.pass, resultado.puntaje, resultado.rompecabeza));
        });
        console.log(arrUsers);
        var data= "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(arrUsers));
        
        $("#descargarjson").attr("href","data:"+data);
        $("#descargarjson").attr("download","ejemplo.json");
    });
    