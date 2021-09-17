console.log("Let's go !");

var randomNumber = Math.round(Math.random() * 500);

// la reponse en console
console.log("Random number : ", randomNumber);

// Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
do {
  // On demande à l'utilisateur de saisir un nombre
  var response = prompt("Devine le juste prix");
  // On transforme sa saisie en nombre
  var responseInteger = parseInt(response, 10);
  console.log(responseInteger);
  // Si la saisie est trop petite on pourrait l'indiquer
  if (randomNumber < responseInteger) {
    alert('C\'est moins')
  }
  // Sinon on pourrait dire que c'est trop grand
  if (randomNumber > responseInteger) {
    alert('C\'est plus')
  }
} while (randomNumber != responseInteger);

alert("C'est gagné ! 🎉");