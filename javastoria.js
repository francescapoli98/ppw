//JS STORIA
//GESTORI GALLERIA 1
function gestoreAvanti1 () {
    try {
        cambiaFoto1(+1);
    } catch (e) {
        alert("gestoreAvanti"+e);
    }   
}

function gestoreIndietro1 () {
    try{
        cambiaFoto1(-1);
    } catch (e) {
        alert("gestoreIndietro"+e);
    }
}

function cambiaFoto1 (x) {
    indiceFoto += x;
    if (indiceFoto == NUMEROFOTO) {
        indiceFoto = 0;
    }
    if (indiceFoto < 0) {
        indiceFoto = NUMEROFOTO - 1;
    }
     nodoFoto1.setAttribute("src", galleria1[indiceFoto]);
    asideRight.removeChild(asideRight.lastChild);
    var nodoTesto = document.createTextNode(descrizioni1[indiceFoto]);
    var nodoP = document.createElement("p");
    nodoP.setAttribute("id","infogallery");
    nodoP.appendChild(nodoTesto);
    asideRight.appendChild(nodoP);
}

//GESTORI GALLERIA 2
function gestoreAvanti2 () {
    try {
        cambiaFoto2(+1);
    } catch (e) {
        alert("gestoreAvanti"+e);
    }   
}

function gestoreIndietro2 () {
    try{
        cambiaFoto2(-1);
    } catch (e) {
        alert("gestoreIndietro"+e);
    }
}

function cambiaFoto2 (x) {
    indiceFoto += x;
    if (indiceFoto == NUMEROFOTO) {
        indiceFoto = 0;
    }
    if (indiceFoto < 0) {
        indiceFoto = NUMEROFOTO - 1;
    }
     nodoFoto2.setAttribute("src", galleria2[indiceFoto]);
    
    asideLeft.removeChild(asideLeft.lastChild);
    var nodoTesto = document.createTextNode(descrizioni2[indiceFoto]);
    var nodoP = document.createElement("p");
    nodoP.setAttribute("id","infogallery");
    nodoP.appendChild(nodoTesto);
    asideLeft.appendChild(nodoP);
}


var nodoFoto1;
var nodoFoto2;

var asideRight;
var asideLeft;

var nodoIndietro1;
var nodoAvanti1;
var nodoIndietro2;
var nodoAvanti2;

var galleria1;
var galleria2;

var indiceFoto;

var descrizioni1;
var descrizioni2;

const NUMEROFOTO = 6;


function gestoreLoad () {
    try{       
        asideRight = document.getElementById("right");
        asideLeft = document.getElementById("left");
        
        nodoFoto1 = document.getElementById("foto1");
        nodoFoto2 = document.getElementById("foto2");
        
        nodoAvanti1 = document.getElementById("avanti1");
        nodoIndietro1 = document.getElementById("indietro1");
        nodoAvanti2 = document.getElementById("avanti2");
        nodoIndietro2 = document.getElementById("indietro2");
        
        nodoAvanti1.onclick = gestoreAvanti1;
        nodoAvanti2.onclick = gestoreAvanti2;
        
        nodoIndietro1.onclick = gestoreIndietro1;
        nodoIndietro2.onclick = gestoreIndietro2;

    //galleria1
        galleria1 = [];
        for(var i = 0; i<NUMEROFOTO; i++){
            var nomeFoto = "galleria1/quadro" + i + ".png";
            galleria1.push(nomeFoto);
        }
   //galleria2
        galleria2 = [];
        for(var i = 0; i<NUMEROFOTO; i++){
            var nomeFoto = "galleria2/foto" + i + ".png";
            galleria2.push(nomeFoto);
        }
        
        indiceFoto = 0;
        cambiaFoto1(0);
        cambiaFoto2(0);
        
    } catch (e){
        alert ("gestoreLoad" + e);
    }
}

window.onload = gestoreLoad;

descrizioni1 = {
    0:"'Autoritratto all'età di ventott'anni' - Albrecht Durer, 1500, Alte Pinakothek, Monaco.",
    1:"'Ritratto di uomo con turbante rosso' - Jan van Eyck, 1433, National Gallery, Londra.",
    2:"'Davide con la testa di Golia' - Michelangelo Merisi da Caravaggio, 1609/1610, Galleria Borghese, Roma.",
    3:"'Autoritratto con cappello di feltro grigio' - Vincent Van Gogh, 1887, Museo Van Gogh, Amsterdam.",
    4:"'Self Portrait' - Pierre Auguste Renoir, 1876, Harvard Art Museum, Cambridge.",
    5:"'Autoritratto' - Henri Matisse, 1900, Centre Pompidou, Parigi."
}

descrizioni2 = {
    0:"'Io e i miei pappagalli' - Frida Kahlo, 1941, Banco de Mexico Diego Rivera & Frida Kahlo Museum.",
    1:"'Tamara in a green Bugatti' - Tamara Lempicka, 1929, collezione privata.",
    2:"'Autoritratto' - Giacomo Balla, 1902, Banca d'Italia, Roma.",
    3:"'The first light picture ever taken' - Robert Cornelius, 1839.",
    4:"'Self-portrait' - Vivian Maier, 1956, collezione privata.",
    5:"'Self portait on a boat' - Stanley Kubrick, 1950 circa, collezione privata."
}