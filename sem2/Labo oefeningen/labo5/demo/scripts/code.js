const setup = () => {
    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.addEventListener("mouseover",change);
}

const change = () =>{
    let foto = document.getElementById("imgPhoto");
    let tekst = document.getElementById("txtTekst");

    tekst.innerHTML = "nu ist een kat.";
    foto.src = "images/kat.png";
    foto.alt ="kat";
    foto.classList.remove("sizeBefore");
    foto.classList.add("sizeAfter");

}


window.addEventListener("load", setup);