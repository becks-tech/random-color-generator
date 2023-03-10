const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container")
const copyBtn = document.querySelector("#copy-btn")

btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    container.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
};

copyBtn.addEventListener("click", function(){
    let text = document.querySelector("#color")
    copyText(text)
    copyBtn.textContent = "Copied";
})

async function copyText(text){
    try{
        await navigator.clipboard.writeText(text.value);
        alert(`Copied "${text}" successfully`);
    } catch {
        alert("Copy failed: "+ err);
    }
};