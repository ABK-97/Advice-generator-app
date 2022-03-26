let adviceId = document.getElementById("advice-id");
let advicePara = document.getElementById("advice");
let dice = document.getElementById("dice");

get();
dice.onclick = get;

async function get(){
    const respone = await fetch("https://api.adviceslip.com/advice");
    const data = await respone.json();
    console.log(data.slip);

    toPage(data.slip.id,data.slip.advice);
}

function toPage(id,advice){
    adviceId.textContent = id ;
    advicePara.textContent = `“${advice}”` ;
}