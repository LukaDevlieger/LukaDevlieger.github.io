const setup = () => {
    debugger;



    let btnwijzig = document.getElementById("btnwijzig");
    btnwijzig.addEventListener("click",wijzig)
}
window.addEventListener("load", setup);

function wijzig(){
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}