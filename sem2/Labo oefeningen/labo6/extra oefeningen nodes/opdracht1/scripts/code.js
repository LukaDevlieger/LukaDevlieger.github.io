const setup = () => {
    // let p = document.querySelectorAll("p");
    // for (let i = 0; i<p.length;i++){
    //     p[i].innerHTML = "<h1>good job!</h1>";
    // }
    //deze is te belastend

    let par = document.querySelectorAll("p")[0];
    y = par.childNodes[0];
    par.removeChild(y);
    let textNode = document.createTextNode("good job!");
    par.appendChild(textNode);
}
window.addEventListener("load", setup);