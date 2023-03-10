const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //event based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);

}

const mouseHover = () => {
    document.getElementById("event").innerHTML += "mouse Hovered!<br>";
}
const onClick = () =>    {
    document.getElementById("event").innerHTML += "mouse Clicked!<br>";
}
const mouseOut = () =>   {
    document.getElementById("event").innerHTML += "mouse Out!<br>";
}

const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length;i++){
        //eerst manier (te lang)
        /*listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red";*/

        //tweede manier
       // listItems[i].className = "listItemsStyleNone colorRed";

        //derde manier bij deze manier lukt het maar een keer behalve als ej remove doet
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");

        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output "+ listItems[i].className);
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for(let i=0;i<listItems.length;i++){
        //eerste manier
        /*listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor= "white";*/

        //tweede manier
        //listItems[i].className = "listItemsStyleDisc colorWhite";

        //derde manier bij deze manier lukt het maar een keer behalve als je remove doet
        listItems[i].classList.remove("listItemsStyleNone");
        listItems[i].classList.remove("colorRed");

        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output "+ listItems[i].className);
    }
}

const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);