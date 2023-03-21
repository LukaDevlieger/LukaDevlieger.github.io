const setup = () => {
    let element = document.createElement("p");

    let textNode = document.createTextNode("hello world");

    element.appendChild(textNode);
    document.querySelector("#myDIV").appendChild(element);
    element.setAttribute("class","color")
}
window.addEventListener("load", setup);