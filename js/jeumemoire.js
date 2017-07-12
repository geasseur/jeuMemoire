var couleur = ["red","red","blue","blue","green","green","yellow","yellow","black","black","purple","purple","brown","brown"];
var random = 0;
var randomCouleur = ["vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide"];
var listeCarte;

function creationJeu(){
  var pseudo = prompt("entrez votre pseudo");
  document.getElementById("pseudoJoueur").innerHTML = pseudo;
  for(var i = 0; i<couleur.length; i++){
    random = Math.floor((Math.random() * couleur.length));
    if(randomCouleur[random] == "vide"){
    randomCouleur[random] = couleur[i];
    }
    else{
      i--;
    }

  }
  listeCarte = document.getElementsByClassName("carte");
  console.log(listeCarte);
  for(i = 0; i < randomCouleur.length; i++){
    listeCarte[i].style.background-color = randomCouleur[i];

  }
  console.log(randomCouleur);

}

function
