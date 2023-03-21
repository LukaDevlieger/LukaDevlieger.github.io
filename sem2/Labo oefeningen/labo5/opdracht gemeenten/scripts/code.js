const setup = () => {
    ask()

}

let lijst = [];

const ask = () =>{
    let x = prompt("gemeente");

    if (x == null){
        ask();
    } else if (x === 'stop'){
        geefWeer();
    } else{
        lijst.push(x);
        ask();
    }
}

const geefWeer = () =>{
    let liLijst = document.getElementById("liLijst");

    lijst.sort();
    for (let i = 0;i<lijst.length;i++){
        liLijst.innerHTML += "<option>" + lijst[i] + "</option>";
    }
}
window.addEventListener("load", setup);