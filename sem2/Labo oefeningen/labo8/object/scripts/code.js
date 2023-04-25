const setup = () => {
    // Create an object
    let student1 = {}; // een leeg object
    student1.firstName = "John";
    student1.lastName = "Doe";
    student1.age = new Date (2000,1,1);
    student1.eyeColor = "blue";

    let tekst = JSON.stringify(student1);
    console.log(tekst)


    console.log (student.firstName);



// korter
// Create an object:
//      JavaScript Object Literal is a data type used
//      to define objects in JavaScript.
//      It is a syntax for creating an object in
//      JavaScript that is composed of
//      key-value pairs.
}
window.addEventListener("load", setup);