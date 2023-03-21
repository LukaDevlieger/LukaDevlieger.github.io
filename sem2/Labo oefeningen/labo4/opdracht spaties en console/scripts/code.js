const setup = () => {


    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click",change);
}

const change = () => {
    let word = document.getElementById("txtvalue").value;
    let result = maakMetSpaties(word);
    console.log(result);
}

const maakMetSpaties = (inputTekst) =>{
    let woord =""

    for (let i = 0; i < inputTekst.length;i++){
        woord += inputTekst[i] +" ";
        // woord += inputTekst.charAt(i) + " ";
    }
    return woord;
}

window.addEventListener("load", setup);