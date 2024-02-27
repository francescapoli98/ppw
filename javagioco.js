//JS GIOCO
function gestoreClick () {
    try{
        gestoreMex (); 
        indice++; 
        
        if(indice >= mappe.length) {    
            nodoMap.removeChild(nodoMap.firstChild);
            
            nodoImg.setAttribute("src","img/vangogh1889.jpg");
            nodoImg.setAttribute("id","vangogh");
            
            var nodoP = document.createElement("p");
            nodoP.setAttribute("id","vangogh");
            var nodoTesto = document.createTextNode("Immagine: Vincent van Gogh - Autoritratto (1889), Musée d'Orsay, Parigi");
            nodoMap.appendChild(nodoP);
            nodoP.appendChild(nodoTesto);
            
           var nodoFine = document.getElementById("fine");
            nodoFine.style.visibility = "visible";
        }
        else {    
           nodoImg.setAttribute("src",mappe[indice].src);
           nodoArea.setAttribute("coords",mappe[indice].coords);
        }
        
    } catch (e) {
        alert ("gestoreClick" + e);
    }
}

//gestore per le descrizioni a lato
function gestoreMex () {
    try{        
        var nodoP = document.createElement("p");  
        nodoP.setAttribute("id","info");
        
        var nome = mappe[indice].name; 
        var nodoTesto = document.createTextNode(messaggi[nome]); 
        
        var nodoIcona = document.createElement("img");
        nodoIcona.setAttribute("src",icone[nome])
        nodoIcona.setAttribute("id","miniatura");
        nodoMessaggio.appendChild(nodoP);
        nodoMessaggio.appendChild(nodoIcona);
        nodoP.appendChild(nodoTesto);
       } catch (e) {
        alert ("gestoreMex" + e);
    }
}


function gestoreResize () {
    try{
        var larghezzaattuale = nodoImg.width; 
        var ratio = larghezzaattuale / larghezzainiziale; 
        
         
        for (var i = 0; i<mappe.length; i++) {
            var coord_str = mappe[i].coords; 
            var coord_array = coord_str.split(","); 
            
            for (var j = 0; j<coord_array.length; j++){
                coord_array[j] *= ratio; 
            }
            mappe[i].coords = coord_array.join(",");
        }
        
        larghezzainiziale = larghezzaattuale; 
        if(indice<mappe.length){
            nodoArea.setAttribute("coords",mappe[indice].coords); 
        }
    
    } catch(e){
        alert("gestoreResize"+e);
    }
}


var nodoSpan; 
var nodoMessaggio; 
var messaggi; 
var mappe; 
var icone; 
var nodoArea;
var nodoImg;

var indice;

var larghezzainiziale = 564; 


function gestoreLoad () {
  try{
    nodoSpan = document.getElementById("mappa");
    nodoMessaggio = document.getElementById("messaggio");
    
    indice = 0;
     
    nodoImg = document.createElement("img");
    nodoSpan.appendChild(nodoImg); 
      nodoImg.setAttribute("usemap","#mappa"); 
      nodoImg.setAttribute("src",mappe[indice].src);
      nodoImg.setAttribute("id","immagine");
      
    nodoMap = document.createElement("map");
      nodoMap.setAttribute("name","mappa");
      nodoMap.setAttribute("id","mappa");
      nodoSpan.appendChild(nodoMap);
      
    nodoArea = document.createElement("area");
    nodoMap.appendChild(nodoArea);
    nodoArea.setAttribute("shape",mappe[indice].shape);
    nodoArea.setAttribute("coords",mappe[indice].coords);
    nodoArea.setAttribute("id","area");  
      
    nodoImg.onload = gestoreResize;
      
    nodoArea.onclick = gestoreClick;
    
    window.onresize = gestoreResize; 

      
    } catch (e) {
    alert("gestoreLoad" + e);    
  }
}

window.onload = gestoreLoad;


//immagini interattive
mappe = [
     {  
        name:"velazquez",
        src:"img/velazquez.png",
        shape:"rect",
        coords:"93,156,168,281"
        
     },
     {
        name:"michetti",
        src: "img/michetti.png",
        shape:"rect",
        coords:"164,198,217,242"
    },
    {
        name:"dali",
        src:"img/dali.png",
        shape:"rect",
        coords:"224,245,474,397"
    }
];

//messaggi a comparsa
messaggi = {
    velazquez:"Diego Velázquez - Las Meninas (1656), Museo del Prado, Madrid",
    michetti:"Francesco Paolo Michetti - La figlia di Jorio (1895), Palazzo della Provincia, Pescara",
    dali:"Dalì - La persistenza della memoria (1931), Museum of Modern Art, New York"
};

//miniature
icone = {
    velazquez:"img/velazquez.jpg",
    michetti:"img/michetti.jpg",
    dali:"img/dali.jpg"
};
