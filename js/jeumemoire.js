
//variable creationJeu
var couleur = ["red","red","blue","blue","green","green","yellow","yellow","black","black","purple","purple","brown","brown"];
var randomCouleur = ["vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide"];
var random = 0;
var listeCarte;

//variable lancementJeu


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
    //listeCarte[i].style.backgroundcolor = randomCouleur[i];
    listeCarte[i] = randomCouleur[i];
  }
  console.log(randomCouleur);
  listeCarte[i].onclick = lancementJeu;
}

function lancementJeu(){
  for(i = 0; i < listeCarte.length; i++){
    listeCarte[i].style.backgroundcolor = listeCarte[i];
  }

}
