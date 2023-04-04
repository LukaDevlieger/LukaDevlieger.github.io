const setup = () => {
    let li = document.querySelectorAll("li");
    for (let i = 0; i<li.length;i++){
       li[i].setAttribute("class","listitem");
    }

    let myPic = document.createElement("img");
    myPic.setAttribute("src","https://www.hhjo.nl/uploads/blogs/social_og_image/1200x630/de-schaduw.jpeg")
    myPic.setAttribute("alt","mezelf");
    document.querySelector("body").appendChild(myPic);


}
window.addEventListener("load", setup);