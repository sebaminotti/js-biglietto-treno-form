var nome 
var eta 
var km 
var posto = Math.floor(Math.random()*(500,1150));
var carrozza = Math.floor(Math.random()*(120,1000));

var prezzoKm = 0.21;
var prezzoKmGiovani = 0.21 / 100 * 80; // prezzo al km scontato 0.168:
prezzoKmGiovani = prezzoKmGiovani.toFixed(2);
var prezzoKmAnziani = 0.21 / 100 * 60; // prezzo al km scontato 0.126;
prezzoKmAnziani = prezzoKmAnziani.toFixed(2);
var totale
var promo
var genera = document.getElementById("genera");
var annulla= document.getElementById("annulla");



genera.addEventListener("click",
function(){
var nome = document.getElementById("nome").value;
console.log(nome)
var eta = document.getElementById("anni").value;
console.log(eta)

var km = document.getElementById("km").value;
console.log(km)

if (eta == "minori") {
    var totale = prezzoKmGiovani * km ;
    
} else if (eta =="adulti") {
    var totale = prezzoKm * km
    
} else if (eta == "anziani") {
    var totale = prezzoKmAnziani * km ;
    
    
}

if (eta == "minori") {
    promo = "(SCONTO MINORI) LO SCONTO APPLICATO E' DEL 20%"
}else if (eta=="adulti") {
    promo = "(ADULTI)  PAGHERAI TARIFFA PIENA NESSUNA PROMO DISPONIBILE"
} else if (eta=="anziani") {
    promo ="(ANZIANI) LO SCONTO ANZIANI E' PARI AL 40%"
}

if(km<10){
    alert("MI SPIACE MA TRATTE COSI CORTE NON ESISTONO")
    location.reload()
} else if( km > 30000){
    alert("ok partire da bolzano per andare a lampedusa ma tu vuoi andare sulla luna")
}

document.getElementById("sconto").innerHTML=promo
document.getElementById("passeggero").innerHTML=nome
document.getElementById("carrozza").innerHTML=carrozza;
document.getElementById("posto").innerHTML=posto
document.getElementById("distanza").innerHTML=km
document.getElementById("fasciaEta").innerHTML=eta
document.getElementById("totale").innerHTML=totale+"€"
}

)

annulla.addEventListener("click",
function(){
document.getElementById("boxBiglietto").style.display="none";
// document.getElementById("BIGLIETTOO").style.display="none"


document.getElementById("form").style.display=location.reload();

}
);
genera.addEventListener("click",
function(){
    document.getElementById("boxBiglietto").style.display="block";
    // document.getElementById("BIGLIETTOO").style.display="block"

  
}
);



