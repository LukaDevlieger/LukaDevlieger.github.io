let personen = [];

const setup = () =>{
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click",bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click",bewerkNieuwePersoon);
}

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
    const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    // valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

    let persoon = {};
    vulPersoonOpBasisVanInterface(persoon);
    personen.push(persoon)
    voegPersoonToeAanLijstInUserInterface(persoon);
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    personen.selectedIndex = -1;

    let inputElem = document.querySelectorAll('input[type=text]')

    inputElem.forEach((elem)=>{
        elem.value = "";
    });


    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

    const vulPersoonOpBasisVanInterface = (Persoon) =>{
        Persoon.voornaam = document.getElementById("txtVoornaam");
        let txtVoornaam = document.getElementById("txtVoornaam").value.trim();
        Persoon.familienaam = document.getElementById("txtFamilienaam");
        Persoon.geboortedatum = document.getElementById("txtGeboorteDatum");
        Persoon.email = document.getElementById("txtEmail");
        Persoon.aantalKinderen = document.getElementById("txtAantalKinderen");
    }

    const voegPersoonToeAanLijstInUserInterface = (persoon) =>{
        let lstPersonen = document.getElementById("lstPersonen");
        let option = document.createElement("option");
        option.text = persoon.voornaam + " " + persoon.familienaam + " " + persoon.geboortedatum +" " +persoon.email + " " + persoon.aantalKinderen;
        option.value= persoon.email;
        lstPersonen.appendChild(option);
        lstPersonen.selectedIndex = personen.length -1;
}
window.addEventListener("load", setup);