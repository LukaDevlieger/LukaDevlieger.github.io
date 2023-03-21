const setup = () => {
    let li = document.querySelectorAll("li");
    for (let i = 0; i<li.length;i++){
       li[i].setAttribute("class","listitem");
    }

    let myPic = document.createElement("img");
    myPic.setAttribute("src","https://r.search.yahoo.com/_ylt=AwrEbUdZgBRk9DMCmguJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzkzMGQ3NmFkYzg4NzEyZWEzNmE2OGE1ZjFiZDg5ZWEwBGdwb3MDMwRpdANiaW5n/RV=2/RE=1679093977/RO=11/RU=https%3a%2f%2fwww.pinterest.com%2fpin%2f39617671698423261%2f/RK=2/RS=9eDDU91V6vuIDbzxvyjA4.Pnpcc-")
    myPic.setAttribute("alt","mezelf");
    document.querySelector("body").appendChild(myPic);


}
window.addEventListener("load", setup);