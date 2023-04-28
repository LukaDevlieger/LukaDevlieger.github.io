let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;

let kaarten = ['img1.png','img2.png','img3.png','img4.png','img5.png','img6.png'];

const setup = () => {
    zetSpeelveld();
    let kaartklik = document.getElementById("vak");
    vak.addEventListener("click",draaiKaart)
}

const zetSpeelveld = () =>{
    let index = Math.random() * 5;
    index = Math.round(index);
    console.log(index);
    let img = kaarten[index];

    console.log(img);

    let veld = document.getElementById("speelVeld");

    for (let i = 0 ; i < 12 ; i++){
        let vak = document.createElement("div");
        vak.classList.add("vak")
        veld.appendChild(vak)
    }
}

const draaiKaart = () =>{

}

Window.addEventListener("load", setup);