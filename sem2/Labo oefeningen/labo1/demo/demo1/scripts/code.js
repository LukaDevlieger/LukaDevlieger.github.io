//arrowfunction, setup is de naam vd functie, haakjes de parameter, {wat uitgevoerd wordt}
const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);
    lblCursus.addEventListener("mouseout",normal)

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const normal = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "";
}

const show  = () => {
    let txtName = document.getElementById("txtName");
    if(txtName.value !== ""){
        alert("jouw naam is "+ txtName.value);

        console.log("jouw naam is " + txtName.value);

        //alt 96 voor het tekentje `
        console.log(`jouw naam is ${txtName.value}`)
    } else  {
        alert("gelieve naam in te vullen");
    }
}












window.addEventListener("load", setup);
//als de "vuurpijl" load afgevuurd is dan voert hij setup uit
//zorgt er basically voor dat hij javascript pas uitvoert na dat html en css zijn geladen
