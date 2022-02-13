import { getMitzvas } from "./MitzvahList.js";
/*-------------------------------- Variables --------------------------------*/
const finalMitzvaArray = getMitzvas();
let nounsArray = [];
let verbsArray = [];
let adjArray = [];
//getMitzvas returns 3 random Mitzvos from the Mitzva list

/*-------------------------------- Cached Element references --------------------------------*/

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

const mitzvahMishkebabbleButton = document.querySelector("#mitzvahMishkebabbleButton");



const submitAdjective = document.getElementById("adjectives-button");

const submitNounsButton = document.getElementById("nouns-button");
const nounInp1 = document.getElementById("ninput-1");
const nounInp2 = document.getElementById("ninput-2");
const nounInp3 = document.getElementById("ninput-3");

const verbsForm = document.getElementById("verb-form");
const formInputEls= document.querySelectorAll(".form-input")
console.log(formInputEls)
const verbInp1 = document.getElementById("vinput-1");
const verbInp2 = document.getElementById("vinput-2");
const verbInp3= document.getElementById("vinput-3");

const submitAdjectiveButton = document.getElementById("adjectives-button");
const adjInp1 = document.getElementById("adjinput-1");
const adjInp2 = document.getElementById("adjinput-2");
const adjInp3= document.getElementById("adjinput-3");



//input= click --> output --> randomize Mishkabbabler -->into MitzvaSelections []
/*----------------------------- Event Listeners -----------------------------*/
button1.addEventListener("click", () => {
    console.log("Yechi HaMelech");
  });
button2.addEventListener("click", () => {
  console.log("Yechi HaMelech");
});
button3.addEventListener("click", () => {
  console.log("Yechi HaMelech");
});
button4.addEventListener("click", () => {
  console.log("Yechi HaMelech");
});

mitzvahMishkebabbleButton.addEventListener("click", () => {
    return getMitzvas();
});

// submitNounsButton.addEventListener("click", function (evt) {
//     for(let i=0;i<3;i++){
//     const li.i = document.createElement("li");
//     li.i.textContent = nounInp1.value;
//     document.querySelector("ul").appendChild(li1);}


// const li2 = document.createElement("li");
//     li2.textContent = nounInp2.value;
//     document.querySelector("ul").appendChild(li2);

// const li3 = document.createElement("li");
//     li3.textContent = nounInp3.value;
//     document.querySelector("ul").appendChild(li3);

// nounsArray.push(nounInp1.value);
// nounsArray.push(nounInp2.value);
// nounsArray.push(nounInp3.value);

// console.log(nounsArray);
// });

verbsForm.addEventListener("submit", getInputValues)
const formValues = []
function getInputValues(){
    formInputEls.forEach(formInputEl => {
        console.log(formValues)
        const input = formInputEl.value
        formValues.push(input)
    })

console.log(e.value);
    const li4 = document.createElement("li");
        li4.textContent = verbInp1.value;
        document.getElementById("verbs-ul").appendChild(li4);

    const li5 = document.createElement("li");
        li5.textContent = verbInp2.value;
        document.getElementById("verbs-ul").appendChild(li5);

    const li6 = document.createElement("li");
        li6.textContent = verbInp3.value;
        document.getElementById("verbs-ul").appendChild(li6);
    }
verbsArray.push(verbInp1.value);
verbsArray.push(verbInp2.value);
verbsArray.push(verbInp3.value);


submitAdjectiveButton.addEventListener("click", function (evt) {
    const li7 = document.createElement("li");
    li7.textContent = adjInp1.value;
    document.getElementById("adj-ul").appendChild(li7);

const li8 = document.createElement("li");
    li8.textContent = adjInp2.value;
    document.getElementById("adj-ul").appendChild(li8);

const li9 = document.createElement("li");
    li9.textContent = adjInp3.value;
    document.getElementById("adj-ul").appendChild(li9);

adjArray.push(adjInp1.value);
adjArray.push(adjInp2.value);
adjArray.push(adjInp3.value);

});

