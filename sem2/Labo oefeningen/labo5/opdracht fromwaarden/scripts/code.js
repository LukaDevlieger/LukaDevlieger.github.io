const setup = () => {
    let Send = document.getElementById("btnSend");
    Send.addEventListener("click",check);
}

const check = () => {
    //get roker
    let isRoker = false
    let roker = document.getElementById("chkRoker");
    if (roker.checked){
        isRoker = "is roker";
    } else  {
        isRoker = "is geen roker";
    }
    console.log(isRoker);

    //get moedertaal
    let moedertaal = "geen waarde gevonden";
    let moedertaalnl = document.getElementById("rdbnl");
    let moedertaalfr = document.getElementById("rdbfr");
    let moedertaalen = document.getElementById("rdben");
    if (moedertaalnl.checked){
        moedertaal = "moedertaal is nl";
    } else if (moedertaalfr.checked){
        moedertaal = "moedertaal is fr";
    } else if(moedertaalen.checked){
        moedertaal = "moedertaal is en";
    } else{
        moedertaal = "geen moedertaal opgegeven";
    }

    console.log(moedertaal);

    //get buurland
    let favbuurland = document.getElementById("favBuurland").value;
    console.log("favoriete buurland is " + favbuurland);



    //get bestelling
    let select = document.getElementById('bestelling');
    let selectedValues = [];

    for (let i = 0; i < select.selectedOptions.length; i++) {
        selectedValues.push(select.selectedOptions[i].value);
    }

    console.log(selectedValues);



}

window.addEventListener("load", setup);