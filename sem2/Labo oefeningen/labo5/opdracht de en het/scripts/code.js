const setup = () => {
    let btnKnop = document.getElementById("btnKnop");
    btnKnop.addEventListener("click", change);

    //Gisteren zat de jongen op de stoep en at de helft van de appel
}


const change = () =>{
    let tekst = document.getElementById("txtTekst").value;
    console.log(tekst);
    let lengte = tekst.length;
    while(tekst.indexOf("de") !== -1){
        let v1 = tekst.slice(0,tekst.indexOf("de"))
        let v2 = tekst.slice(tekst.indexOf("de") + 2,tekst.length);

        tekst = v1 + "het" + v2;
        console.log(tekst);
    }

    console.log(tekst)
}
window.addEventListener("load", setup);