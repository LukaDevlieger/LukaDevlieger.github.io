const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i <sliders.length;i++){
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update);
    }

    let btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click",saveSwatch);

    update();
}

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    let box = document.getElementById("swatch");
    box.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

}

const saveSwatch = () =>{
    let swatchcomponents = document.getElementById("swatchComponents");
    let swatch = buildSwatchComponent();
    swatchcomponents.appendChild(swatch);
}

const buildSwatchComponent = () =>{
    let swatch = document.createElement("div");
    swatch.setAttribute("id","swatch");
    let btnDelete = document.createElement("input");

    btnDelete.setAttribute("type","button");
    btnDelete.setAttribute("value","x");
    btnDelete.addEventListener("click",deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
}

const deleteSwatch = (event) =>{
    let swatchComponents = document.getElementById("swatchComponents")
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
}

window.addEventListener("load", setup);