/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */
function creaElemento(tag, classe, testo){
  let element = document.createElement(tag)
  element.className = classe
  element.innerText = testo
  return element
}

//console.log(creaElemento("div", "casella", "ciao"));
let griglia = document.querySelector(".griglia")
let start = document.getElementById("start")
let difficolta = document.getElementById("difficoltà")
console.log(difficolta);
const r = document.querySelector(":root")
const htmlMain = document.querySelector(".container")


start.addEventListener("click", function(){
  tabella()
})

function tabella() {

  htmlMain.innerHTML = ''

  let valoreDifficolta = difficolta.value;

  numeroCelle(valoreDifficolta)

  for (let i = 1; i <= valoreDifficolta; i++) {

    const casella = creaElemento("div", "casella", i)

    griglia.append(casella)
  
    casella.addEventListener("click", function(){

      this.classList.toggle("green")

      console.log(this.innerText);
    })
  }

}

function numeroCelle(x) {
  x = Math.sqrt(x)
  r.style.setProperty ("--numcelle", x)
  
}