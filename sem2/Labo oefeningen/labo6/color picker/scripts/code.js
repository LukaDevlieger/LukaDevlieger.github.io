const setup = () => {
    //sliders is dus de verzameling van de sliders
    const sliders = document.getElementsByClassName("slider");
    //iterate door de sliders en als er verandering is voer funcite update uit
    for (let i = 0; i <sliders.length;i++){
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update);
    }
    //als knop save geklikt is voer funcite click uit
    let btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click",saveSwatch);
    //zorgt ervoor dat de pagina geladen wordt met een kleurtje
    update();

}




const update = () => {
    //waardes van slider in variabele steken
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    //zet een getal ernaast om te tonen op hoeveel de slider staat
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    //het vierkant die het huidige kleur toont
    let box = document.getElementById("swatch");
    box.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

}

const saveSwatch = () =>{
    //selecteer de div waar de opgeslagen vierkanten moeten
    let swatchcomponents = document.getElementById("swatchComponents");
    //nieuwe swatch
    let swatch = buildSwatchComponent();
    //de nieuwe swatch in de div steken
    swatchcomponents.appendChild(swatch);
}

const buildSwatchComponent = () =>{
    //nieuwe vierkant maken
    let swatch = document.createElement("div");
    //id geven
    swatch.setAttribute("id","swatch");

    //waardes van slider in variabele steken
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    swatch.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

    //zet een getal ernaast om te tonen op hoeveel de slider staat
    //geen idee wat dit deed maar het veranderd eig niks
    // document.getElementById("lblRed").innerHTML = red;
    // document.getElementById("lblGreen").innerHTML = green;
    // document.getElementById("lblBlue").innerHTML = blue;

    //knop maken om te verwijderen
    let btnDelete = document.createElement("input");
    btnDelete.setAttribute("type","button");
    btnDelete.setAttribute("value","x");
    btnDelete.addEventListener("click", () => {
        swatch.parentNode.removeChild(swatch);
    });
    btnDelete.style.float = "right"




    //plak de knop aan het nieuwe vierkant
    swatch.appendChild(btnDelete);
    return swatch;
}

const deleteSwatch = (event) => {
    const deleteSwatch = (event) => {
        let swatch = event.target.parentNode;
        let swatchcomponents = document.getElementById("swatchComponents");
        swatchcomponents.removeChild(swatch);
    }

}

window.addEventListener("load", setup);