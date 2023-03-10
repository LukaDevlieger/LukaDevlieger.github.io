const setup = () => {


    document.getElementById("btnReken").addEventListener("click", bereken);


}


const bereken = () => {
    let totaal = 0;
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");


    for(let i =0; i<aantallen.length;i++)
    {
        subtotalen[i].value =aantallen[i].value * parseInt(prijzen[i].innerHTML);
        subtotalen[i].value+= subtotalen[i].value*(parseInt(btws[i].innerHTML)/100);
        totaal +=subtotalen[i].value;
        console.log("product" +i+ "prijs="+ subtotalen[i].value);
    }
    console.log("totaal ="+ totaal);

    let sub = document.getElementsByClassName("subtotaal");
    document.getElementById("totaal").innerHTML= totaal+ "EUR";
    for(let i=0; i<aantallen.length;i++)
    {

        sub[i].innerHTML= subtotalen[i].value + " EUR";
    }
}

window.addEventListener("load", setup);