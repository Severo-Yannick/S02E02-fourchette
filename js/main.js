console.log("Let's go !");

var randomNumber = Math.round(Math.random() * 500);

// la reponse en console
console.log("Random number : ", randomNumber);

// On demande à l'utilisateur de saisir un nombre
var response = prompt("Devine le juste prix");
// On transforme sa saisie en nombre
var responseInteger = parseInt(response, 10);
console.log(responseInteger);
