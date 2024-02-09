//PROGRAMMA COUNTDOWN

//salvo in una const l'elemento del timer
const timerElement = document.querySelector("#time")

// Imposta la data di scadenza per domani alle 9:30

//data attuale
let countDownDate = new Date();
console.log(countDownDate);

//incremento la data (a domani)
countDownDate.setDate(countDownDate.getDate() + 1);

//setto ore e minuti, cosi la data è domani alle 9:30
countDownDate.setHours(9);
countDownDate.setMinutes(30);
countDownDate.setSeconds(0);

console.log(countDownDate);