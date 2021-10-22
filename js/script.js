// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


const necesKm = parseInt(prompt('Quanti Km devi percorrere?'));
const age = parseInt(prompt('Quanti anni hai?'));
const sconto20 = prompt('inserire il discount code "SCONTO20" per gli under20');

let ticketPrice = necesKm * 0.21;
let errorMsg = '';
let errorMsg2 = '';
let errorMsg3 = '';
let errorMsg4 = '';

if (age < 18) {
   ticketPrice = ticketPrice * 0.8;
   console.log("ok sono under18")
} else if (age > 64) { 
   ticketPrice = ticketPrice * 0.6;
   console.log("ok sono over65")
}

if (age < 21 && sconto20 === 'SCONTO20') {
   ticketPrice = ticketPrice * 0.6;
   console.log('SCONTO VALIDO')
} else if (age >= 21 && sconto20 === 'SCONTO20') {
   codiceSconto = false;
   errorMsg3 = 'Codice sconto non valido per la tua fascia di età'
} 

ticketPrice = ticketPrice.toFixed(2);

let codiceSconto = true;
let kmValido = true;
let ageValida = true;
let outputStr = ticketPrice;







if (sconto20 !== 'SCONTO20'){
   errorMsg4 = 'Codice non valido';
}


if(isNaN(necesKm)){
   kmValido = false;
   errorMsg = 'Inserire un numero di Km valido!';
}

if(isNaN(age)){
   ageValida = false;
   errorMsg2 = 'Inserire un età valida!';
}

if(!kmValido){
   outputStr = "Errore! "+errorMsg;
}

if(!ageValida){
   outputStr = "Errore! "+errorMsg2;
}


console.log("age", age);
console.log('kmValido', kmValido)
console.log('ageValido', ageValida)
console.log('errorMsg',errorMsg)

document.getElementById("prezzoticket").innerHTML = outputStr;

document.getElementById("erroresconto").innerHTML = errorMsg3;

document.getElementById("nonvalido").innerHTML = errorMsg4;
