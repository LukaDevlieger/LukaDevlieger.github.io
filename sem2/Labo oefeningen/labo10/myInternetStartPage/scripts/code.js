const setup = () => {

    buildHistory();

    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click",checkCommand);
}



const checkCommand = () => {
    let input = document.getElementById("commandoInput").value;
    input = input.toLowerCase().trim();
    console.log("here")

    let search = input.substring(3);

    let url = "";

    let h = {};

    let arrayget = localStorage.getItem("MyInternetStartPage");
    array = JSON.parse(arrayget);

    if (array == null){
        array = [];
    }

    console.log(array);

    if (input.startsWith("/g")){
        url = "https://www.google.com/search?q=";
        h = {
            title: "google",
            text: search,
            url: url +search
        };


    } else if (input.startsWith("/y")){
        url = "https://www.youtube.com/results?search_query=";
        h = {
            title: "youtube",
            text: search,
            url: url +search
        };

    } else if (input.startsWith("/t")){
        url = "https://www.twitter.com/hashtag/";
        h = {
            title: "twitter",
            text: search,
            url: url + search
        };
    } else if (input.startsWith("/i")){
        url = "https://www.instagram.com/explore/tags/"
        h = {
            title: "instagram",
            text: search,
            url: url +search
        };


    } else if (input.startsWith("/")){
        alert("unknown command prefix")
    } else {
        alert("invalid command")
    }



    if (h !== {}){
        window.open(url + search);
        array.push(h);
        console.log(h);
    }

    arrayJSON = JSON.stringify(array);
    localStorage.setItem("MyInternetStartPage",arrayJSON);

    buildHistory();

}

const buildHistory = () =>{
    let arrayJSON = localStorage.getItem("MyInternetStartPage");
    let arrayget = JSON.parse(arrayJSON);

    kaarten = document.getElementsByClassName("row");
    while (kaarten[0].firstChild) {
        kaarten[0].removeChild(kaarten[0].firstChild);
    }

    if (arrayget != null){
        console.log(arrayget.length);
        for ( let i = arrayget.length -1; i >= 0 ; i--){
            let items = arrayget[i];

            let col = createElement("div","col-4");

            let e = null;
            if (items.title == "youtube"){
                //de juiste classes geven aan de elementen
                // ook van de andere site dingen dus
                e = createElement("div","card youtube-card");
            } else if(items.title == "instagram"){
                e = createElement("div","card instagram-card");
            } else if(items.title == "google") {
                e = createElement("div", "card google-card");
            } else if(items.title == "twitter"){
                e = createElement("div","card twitter-card");
            }


            col.appendChild(e);

            let divbody = createElement("div","card-body");
            e.appendChild(divbody);

            let h5 = createElementWithText("h5","card-title",items.title);
            divbody.appendChild(h5);

            let p = createElementWithText("p","card-text",items.text);
            divbody.appendChild(p);


            let a = null;

            if (items.title == "youtube"){
                a = createElementWithText("a","btn btn-primary youtube-button","GO!");
                a.setAttribute("href",items.url);
            } else if(items.title == "instagram"){
                a = createElementWithText("a","btn btn-primary instagram-button","GO!");
                a.setAttribute("href",items.url);
            } else if(items.title == "google") {
                a = createElementWithText("a","btn btn-primary google-button","GO!");
                a.setAttribute("href",items.url);
            } else if(items.title == "twitter"){
                a = createElementWithText("a","btn btn-primary twitter-button","GO!");
                a.setAttribute("href",items.url);
            }



            divbody.appendChild(a);




            kaarten[0].appendChild(col);



        }
    }


}

const createElement =(element,classname) =>{
    let e = document.createElement(element);
    e.setAttribute("class",classname);
    return e;
}

const createElementWithText = (element,classname,text) =>{
    let e = createElement(element,classname);
    e.appendChild(document.createTextNode(text));
    return e;
}

window.addEventListener("load", setup);