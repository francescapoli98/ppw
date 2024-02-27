//JS STILI
function gestoreMostraStili() {
	try{
		nodoDiv.removeChild(nodoDiv.lastChild);
		for (var i in stili){
			if (this.id == i){
                var nodoParagrafo = document.createElement("p");
                nodoParagrafo.setAttribute("class", "right");
				var nodoTesto = document.createTextNode(stili[this.id]);
			}
		}
        nodoParagrafo.appendChild(nodoTesto);
		nodoDiv.appendChild(nodoParagrafo);
	} catch (e) {
		("gestoreMostraStili" + e);
	}
}

var nodoRaff;
var nodoMich;
var nodoParmig;
var nodoGaug;
var nodoWarhol;

var nodoDiv;

var stili;

function gestoreLoad() {
	try{
		nodoRaff = document.getElementById("raff");
		nodoMich = document.getElementById("mich");
		nodoParmig = document.getElementById("parmig");
		nodoGaug = document.getElementById("gaug");
		nodoWarhol = document.getElementById("warhol");
		
		nodoDiv = document.getElementById("stili");
        
		nodoRaff.onclick = gestoreMostraStili;  
		nodoMich.onclick = gestoreMostraStili;
		nodoParmig.onclick = gestoreMostraStili;
		nodoGaug.onclick = gestoreMostraStili;
		nodoWarhol.onclick = gestoreMostraStili;
	} catch (e) {
		alert ("gestoreLoad" + e);
	}
}

window.onload = gestoreLoad;

stili = {
	raff:"Si potrebbe descrivere come un tipo di autoritratto 'nascosto' all'interno di un'opera più grande, inserito in un contesto ampio e vario e spesso considerato come 'firma' dell'artista. Questo genere di autoritratto mantenne per molto tempo un'impostazione tardo-medievale, poiché era l'unico tipo diffuso all'epoca, e grazie alla sua straordinaria diffusione durante il XV secolo diede origine al genere criptato. L'espediente pittorico più utilizzato era quello di inserire l'autoritratto in una parte marginale della scena, ma distaccato nettamente dall'impostazione narrativa degli altri personaggi, con lo sguardo rivolto verso lo spettatore: un esempio classico è 'La scuola di Atene' di Raffaello [immagine], in cui il volto dell'autore è seminascosto tra le figure di artisti e studiosi, 'distratto' dalla presenza dei fruitori. Altri esempi celebri sono Piero della Francesca, che si ritrasse in preghiera nel Polittico della Misericordia (1444-1464), Andrea Mantegna nella Presentazione al Tempio (1455), Sandro Botticelli nell’Adorazione dei Magi (1475).",
	mich:"I filoni del criptoritratto e dell'autoritratto delegato ebbero particolarmente successo in contesto fiammingo. L'autoritratto è inserito in modi inusuali e spesso poco riconoscibile: per esempio in uno specchio spesso convesso, come nel 'Ritratto dei coniugi Arnolfini' di Jan Van Eyck (inoltre, tra i primi esempi di ritratto delegato), o distorto in altri modi, come accade per la figura di Michelangelo inserita nella pelle di San Bartolomeo nel 'Giudizio Universale' della Cappella Sistina [immagine]: il motivo che lo spinse a ritrarsi nell'affresco sta forse nel divieto che gli artisti che lavoravano per il Vaticano avevano di firmare le loro opere. In ambito italiano sono celebri anche i due inserimenti del proprio volto che Andrea Mantegna fece nella decorazione della Camera degli sposi nel Castello di San Giorgio a Mantova. Questo tipo di autoritratto si diffonde a partire dal XV secolo, soprattutto grazie a una nuova attenzione per il macabro e il grottesco, ma continuerà ad essere utilizzato fino all'età contemporanea.",
	parmig:"Tipologia di autoritratto in cui l'autore è l'unico soggetto rappresentato nel quadro, o eventualmente il centro della composizione, su cui si concentra principalmente l'attenzione. Questo stle ritrattistico si sviluppò particolarmente nel XVI secolo grazie alle sperimentazioni di pittori come Parmigianino, Annibale Carracci e altri artisti innovativi; e inoltre, grazie alla rinnovata visione antropocentrica tipica del Rinascimento. L' 'Autoritratto entro uno specchio convesso' [immagine], dipinto nel 1523 circa, rivela una particolare attenzione del pittore al tema dei giochi ottici e alla distorsione della propria immagine, che si collega certamente al suo interesse per la magia e l'alchimia. Una delle sperimentazioni più ardite nella pittura rinascimentale fu infatti quella finalizzata agli effetti volumetrici, se non addirittura tridimensionali: generalmente l'effetto veniva ricreato accentuando la torsione del corpo, a volte spingendo l'effetto fino a creare autoritratti quasi di spalle.",
	gaug:"Questo stile nasce nel XVII secolo con l'introduzione di una spiccata rappresentazione emotiva e dell'approfondimento psicologico nell'arte. Attraverso le opere di Michelangelo Merisi da Caravaggio ne osserviamo i primi esempi, come in 'Davide con la testa di Golia', dove il gigante presenta i tratti di Caravaggio stesso. L'autoritratto introspettivo si sviluppa successivamente grazie al movimento Impressionista, per poi diventare lo stile tipico del XX secolo: è spesso irrealistico, inserito in contesti storici, mitologici o religiosi. Esso non rappresenta la fisionomia dell'artista, ma incarna le sue emozioni, le esperienze, il carattere. Per questo le tecniche utilizzate mirano a creare un forte impatto: per esempio, spesso i colori sono scelti in base alla loro forza comunicativa piuttosto che per la resa realistica. Nell' 'Autoritratto' di Paul Gauguin [immagine], egli si dipinge utilizzando soprattutto i colori primari a contrasto, e ritraendosi nelle vesti di satana, come suggeriscono le immagini allegoriche della mela e del serpente.",
	warhol:"Con l'avvento della fotografia si sviluppa un nuovo genere autoritrattistico, in cui la sperimentazione tecnica, favorita dalla diffusione delle macchine fotografiche, si fonde con la volontà di 'congelare' attimi di vita vera, scene quotidiane, espressioni, gesti, che possano catturare l'atmosfera del momento o l'essenza del soggetto fotografato. Già a partire dalla fine del XIX secolo la fotografia si inserisce nel campo artistico, ma come semplice supporto per l'arte pittorica; successivamente, e in particolare dalla metà del Novecento, essa si impone come una corrente artistica autonoma. Gli autoscatti allo specchio creano una nuova forma espressiva, attraverso la quale si possono dunque studiare gli effetti di luce e di riflesso sperimentando sulla propria immagine. Favoriti da una cultura sempre più individualista, gli autoscatti diventano a volte esempi di autocelebrazione dell'artista, come nel caso di Andy Warhol [immagine], ma a volte sono anche strumento di introspezione, come negli scatti della fotografa Vivian Maier."
};
