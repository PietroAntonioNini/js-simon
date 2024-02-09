//PROGRAMMA COUNTDOWN

//salvo in una const l'elemento del timer
const timerElement = document.querySelector("#time")

//imposto la data di scadenza per domani alle 9:30

//mi salvo la data attuale
let countDownDate = new Date();

//incremento la data (a domani)
countDownDate.setDate(countDownDate.getDate() + 1);

//setto ore e minuti, cosi la data è domani alle 9:30
countDownDate.setHours(9);
countDownDate.setMinutes(30);
countDownDate.setSeconds(0);

console.log(countDownDate);

//ora aggiorno il countdown ogni secondo
setInterval(countDown, 1000);

//creo la funzione countdown
function countDown() {
    //data e ora attuali con un timestamp
    let nowDate = new Date().getTime();
    console.log(nowDate);

    //distanza tra adesso e la data di scadenza
    let distance = countDownDate - nowDate;
    console.log(distance);
}