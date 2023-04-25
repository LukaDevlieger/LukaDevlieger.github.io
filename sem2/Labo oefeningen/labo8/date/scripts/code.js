const setup = () => {
    //console log de datum
    let start = new Date(); //system date
    console.log(start);
    //alleen de dag in index 0 is zaterdag is 6
    console.log( (start.getDay()));
    //get maand
    console.log( (start.getMonth()));
    //jaar volledig
    console.log( (start.getFullYear()));
    //dag
    console.log( (start.getDate()));
    //21-04-2023
    console.log( start.getDate() + "-" + (start.getMonth()+1) + "-" + start.getFullYear() +
        " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2023,0,1);
    console.log(datum);

    //deze shit is heel mis
    let aantaldagen = new Date(2004,7,3);
    let dagen = (start - aantaldagen.getMilliseconds()) / 1000*60*60*24
   console.log("aantal dage: " + parseInt(dagen));



    console.log("toString " + event.toString());


    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());



}
window.addEventListener("load", setup);