const setup = () => {
    loadTables();
    let btngo = document.getElementById("btnGo");
    btngo.addEventListener("click", maakTafel);
}

const maakTafel = () =>{
    let getal = document.getElementById("txtGetal").value;

    if ( !isNaN(getal) ){
        buildTable(getal);
    } else {
        alert("de ingevoerde waarde moet een getal zijn");
    }


}

const buildTable = (getal) =>{
    let tafel =buildHeader(getal);
    tafel = buildBody(getal, tafel);

    maakInputLeeg();

   saveTables();

}

const maakInputLeeg = () =>{
    let input = document.getElementById("txtGetal");
    input.value = null;
}

const buildHeader = (getal) =>{
    //geef de tijd
    let nu = new Date();

    //zoeken waar toevoegen
    let tafelsdiv = document.getElementById("tafels");


    let tafel = document.createElement("div");
    tafel.setAttribute("class","tafel");
    tafelsdiv.appendChild(tafel);


    let header = document.createElement("div");
    header.setAttribute("class","header");
    tafel.appendChild(header);

    let text = document.createTextNode("Tafel van " + getal + " aangemaakt op: " +nu.toTimeString().substring(0,8));

    header.appendChild(text);

    return tafel;
}

const buildBody = (getal, tafel) =>{



    for (let i = 1; i< 11; i++){
        let rij =document.createElement("div");


        let text = document.createTextNode(getal + " x " + i + " = " + getal*i);
        rij.appendChild(text);


        if (i%2){
            rij.setAttribute("class","even");
        }

        tafel.appendChild(rij);
    }
    let tafels = document.getElementById("tafels");
    tafels.append(tafel);
    return tafel;

}

const saveTables = () => {
    let tables = document.getElementById("tafels").innerHTML;
    localStorage.setItem("tables", tables);
};

const loadTables = () => {
    let tables = localStorage.getItem("tables");
    if (tables) {
        document.getElementById("tafels").innerHTML = tables;
    }
};

window.addEventListener("load", setup);