let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;

let kaarten = ['img1.png','img2.png','img3.png','img4.png','img5.png','img6.png'];

const setup = () => {
    zetSpeelveld();

    for (let i = 0; i < 12 ; i++){
        let kaart = document.getElementById("vak" + i);
        kaart.addEventListener("click", draaiKaart);
    }

}


const zetSpeelveld = () =>{

    let veld = document.getElementById("speelVeld");

    speelveldKaarten = kaarten.concat(kaarten);

    for (let i = 0 ; i < 12 ; i++){
        let omhulsel = document.createElement("div");
        let vak = document.createElement("img");
        // vak.setAttribute("src","images/" + img);



        vak.setAttribute("src","images/achterkant.png");
        vak.setAttribute("alt","achterkant van een kaart");
        vak.setAttribute("id","vak" + i);

        let index = Math.random() * speelveldKaarten.length;
        index = Math.ceil(index);
        let img = speelveldKaarten[index - 1];
        console.log(img);

        vak.setAttribute("data-afbeelding", img);
        speelveldKaarten.splice(index -1,1);
        console.log(speelveldKaarten);


        omhulsel.appendChild(vak)
        veld.appendChild(omhulsel);
    }
}

const draaiKaart = (event) =>{

    let kaart = event.target;
    let kaartjes = document.getElementsByClassName("omgedraaid");

    if (kaart.getAttribute("class") !== "omgedraaid" && kaartjes.length < 2)
    {
        if (kaart.getAttribute("src") === "images/achterkant.png") {
            console.log("naar dier");
            draaiNaarDier(kaart);
        } else {
            console.log("naar achterkant");
            draaiNaarAchterkant(kaart);
        }
    }


}

const draaiNaarDier = (kaart) =>{

    // let kaart = document.getElementById("vak"+i);
    let img = kaart.getAttribute("data-afbeelding");

    kaart.setAttribute("src", "images/" + img);
    kaart.setAttribute("alt",img);

    kaart.classList.add("omgedraaid");



    let kaartjes = document.getElementsByClassName("omgedraaid");

    console.log(kaartjes.length);

    if (kaartjes.length >= 2){
        console.log("check gelijk");
        checkGelijk();

    }



}

const draaiNaarAchterkant = (kaart) => {

    kaart.setAttribute("src", "images/achterkant.png");
    kaart.setAttribute("alt","achterkant van de kaart");

    kaart.classList.remove("omgedraaid");
}


const checkGelijk = () => {

    let kaartjes = document.getElementsByClassName("omgedraaid");

    let kaart0 = kaartjes[0];
    let kaart1 = kaartjes[1];

    let src0 = kaartjes[0].getAttribute("src");
    let src1 = kaartjes[1].getAttribute("src");

    console.log(src0);
    console.log(src1);


    if (src0 === src1){
        console.log("gelijk");
        kaart0.classList.add("juist");
        kaart1.classList.add("juist");
        setTimeout(function (){
            draaiNaarAchterkant(kaart0);
            draaiNaarAchterkant(kaart1);
            kaart0.classList.add("hide");
            kaart1.classList.add("hide");
            kaart0.classList.remove("juist");
            kaart1.classList.remove("juist");
        }, 1500);
    } else {
        console.log("niet gelijk");
        kaart0.classList.add("fout");
        kaart1.classList.add("fout");
        setTimeout(function (){
            draaiNaarAchterkant(kaart0);
            draaiNaarAchterkant(kaart1);
            kaart0.classList.remove("fout");
            kaart1.classList.remove("fout");
        }, 1500);

        console.log("teruggedraaid");
    }

}

window.addEventListener("load", setup);