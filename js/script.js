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

    //distanza tra adesso e la data di scadenza
    let distance = countDownDate - nowDate;

    //calcolo i giorni, ore, minuti e secondi rimanenti alla scadenza
    //calcolo la distanza dei giorni (60 secondi per 60 minuti per 24 ore)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //come sopra ma sottraggo i "days"
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
}