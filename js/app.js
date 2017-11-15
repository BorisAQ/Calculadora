

//Objeto Calculadora
var calculadora = {
    signo: "N",
    a: 15,
    b: 20,
    procesar: function () {
        if (this.signo == "mas") {
            return this.a + this.b;
        }
        if (this.signo == "menos") {
            return this.a - this.b;
        }
        if (this.signo == "dividido") {
            return this.a / this.b;
        }
        if (this.signo == "por") {
            return this.a * this.b;
        }
        return 0;

    }

}
//Variables DOM
var botones;
var numeroPantalla;
var pantalla;
var numero1, numero2;
//Funciones




function eventOnClickTecla(event) {
    console.log("Se presiona" + event.currentTarget.id);
    i=event.currentTarget.id
    var caracter;
    if (numeroPantalla.length < 8) {
        if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9" ) {          
            if (numeroPantalla == "0") {
                numeroPantalla = "";
            }
            numeroPantalla = numeroPantalla + i;            
        }
        if (i == "punto") {
            if (numeroPantalla.indexOf(".") == -1) { 
                numeroPantalla = numeroPantalla + ".";
            }
        }       
    }


    if (i == "sign" && numeroPantalla !="0") {
        if (numeroPantalla.indexOf("-") == -1) {
             if( numeroPantalla.length < 8)
                numeroPantalla = "-" + numeroPantalla;

        } else {          
            numeroPantalla = numeroPantalla.substring(1, numeroPantalla.length);
        }
        
    }
    pantalla.innerHTML =numeroPantalla ;
    console.log(numeroPantalla);
}

function borrarNumero() { 
  numeroPantalla = "0";
  pantalla.innerHTML = numeroPantalla;
}

function iniciarOperacion(event) {
    calculadora.a = parseFloat(pantalla.innerHTML);
    calculadora.signo = event.currentTarget.id;    
    numeroPantalla = "0";
    pantalla.innerHTML = numeroPantalla;

}

function calculaOperacion(event) {
    calculadora.b =  parseFloat(pantalla.innerHTML);
    r= calculadora.procesar()
    if (r <= 99999999) {
        if (Number.isInteger(r)) {
            pantalla.innerHTML = calculadora.procesar().toString();
        } else { 
            l = r.toFixed(0).toString.Length;
        }
        if (calculadora.procesar().toString().length > 8) {
            l = r.toFixed(0).toString().length;          
            pantalla.innerHTML = r.toFixed(8 - l );
        }       
    } else { 
        pantalla.innerHTML = "0"
    }
    numeroPantalla = pantalla.innerHTML;
}


function inicializar() {
    //Inicializa botones
    botones = document.getElementsByClassName("tecla");    
    for (i = 0; i < botones.length; i++) {
        botones[i].onclick = eventOnClickTecla;
    }
    //Inicializa el visor de pantalla
    numeroPantalla = "0";
    //
    pantalla = document.getElementById("display");
    pantalla.innerHTML="0"
    //
    document.getElementById("on").onclick = borrarNumero;
    //
    document.getElementById("mas").onclick = iniciarOperacion;
    document.getElementById("menos").onclick = iniciarOperacion;
    document.getElementById("por").onclick = iniciarOperacion;
    document.getElementById("dividido").onclick = iniciarOperacion;
    document.getElementById("igual").onclick = calculaOperacion;

}


//Desarrollo
inicializar();