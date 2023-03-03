const setup = () => {
    const namen = ['Megan markle', 'Joe Biden', 'Donald Trump', 'Barack Obama', 'Micheal Jackson'];
    console.log(namen.length);
    console.log(namen[0]);
    console.log(namen[2]);
    console.log(namen[4]);
    console.log(namen.toString());
}
window.addEventListener("load", setup);



function VoegNaamToe(){
    let naam = window.prompt("extra naam");
    namen.push(naam);
    console.log(naam);
}




