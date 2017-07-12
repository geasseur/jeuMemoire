var pointJoueur = 0;


//variable creationJeu
var couleur = ["red","red","blue","blue","green","green","yellow","yellow","black","black","purple","purple","brown","brown"];
var randomCouleur = ["vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide"];
var random = 0;
var listeCarte;

//variable lancementJeu
var nbCarte;
var nbEssais = 0;
var test1 = 0;
var test2 = 0;

function creationJeu(){
  //var pseudo = prompt("entrez votre pseudo");
  //document.getElementById("pseudoJoueur").innerHTML = pseudo;
  for(var i = 0; i<couleur.length; i++){
    random = Math.floor((Math.random() * couleur.length));
    if(randomCouleur[random] == "vide"){
    randomCouleur[random] = couleur[i];
    }
    else{
      i--;
    }
  }

  console.log(randomCouleur);

  console.log(listeCarte);
}

function essais(nbCarte){
  listeCarte = document.getElementsByClassName("carte");
    listeCarte[nbCarte].style.backgroundColor = randomCouleur[nbCarte];
    nbEssais++;
    console.log(nbEssais);

    if(nbEssais == 1){
      test1 = nbCarte;
    }
    else if (nbEssais ==2) {
      test2 = nbCarte;
    }
    console.log(test1,test2);
    if(test1 =! 0 && test2 != 0){
      if(listeCarte[test1].outlineStyle.backgroundColor == listeCarte[test1].outlineStyle.backgroundColor){
        pointJoueur += 1
      }
      else{
        listeCarte[test1].style.backgroundColor = "white";
        listeCarte[test2].style.backgroundColor = "white";
      }
    }
}
