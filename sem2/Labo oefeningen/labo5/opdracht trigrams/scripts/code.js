const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click",zoeken);

}

const zoeken = () =>{
    let tekst = document.getElementById("txtTekst").value;
    let lijst = document.getElementById("List");
    for (let i = 0; i<tekst.length -2;i++){
        lijst.innerHTML += "<li>" + tekst.slice(i,i+3) + "</li>";
    }

}


window.addEventListener("load", setup);