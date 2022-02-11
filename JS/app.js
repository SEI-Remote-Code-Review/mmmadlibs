import {getMitzvas} from "./MitzvahList.js"
/*-------------------------------- Variables --------------------------------*/
const finalMitzvaArray = getMitzvas()
//getMitzvas returns 3 random Mitzvos from the Mitzva list

/*-------------------------------- Cached Element references --------------------------------*/

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")

const mitzvahMishkebabbleButton = document.querySelector ("#mitzvahMishkebabbleButton")
const submitNounsButton = document.getElementById("#nouns-button") 
const submitVerbsButton = document.getElementById("#verbs-button") 
const submitAdjective = document.getElementById("#adjectives-button")

//input= click --> output --> randomize Mishkabbabler -->into MitzvaSelections []
/*----------------------------- Event Listeners -----------------------------*/
console.log(finalMitzvaArray)

button2.addEventListener('click', () => {
    console.log('Yechi HaMelech')
})
button3.addEventListener('click', () => {
    console.log('Yechi HaMelech')
})
button4.addEventListener('click', () => {
    console.log('Yechi HaMelech')
})

mitzvahMishkebabbleButton.addEventListener('click', () => {
return getMitzvas()})

console.log(finalMitzvaArray)







