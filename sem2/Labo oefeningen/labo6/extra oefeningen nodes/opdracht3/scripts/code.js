const setup = () => {
    let para = document.createElement("p");
    let t = document
        .createTextNode("this is a paragraph");
    para.appendChild(t);
    document.getElementById("myDIV")
        .appendChild(para);
}
window.addEventListener("load", setup);