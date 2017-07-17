var pointJoueur = 0;
var message = document.getElementById("message");
var pointInterface = document.getElementById("point");
var compteur = document.getElementById("compteur");
var compte = 15;
compteur.innerHTML = compte;


//variable creationJeu
var couleur = ["red","red","blue","blue","green","green","yellow","yellow","black","black","purple","purple","brown","brown"];
var randomCouleur = ["vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide","vide"];
var random = 0;

//variable attribution
var listeCarte = document.getElementsByClassName("carte");

//variable lancementJeu
var nbCarte;
var nbEssais = 0;
var test1 = 0;
var test2 = 0;
document.getElementById("point").innerHTML = pointJoueur;

function pseudo(){
  //var pseudo = prompt("entrez votre pseudo");
  //document.getElementById("pseudoJoueur").innerHTML = pseudo;
  creationJeu();
}

function creationJeu(){//créer le tableau random de couleur
  for(var i = 0; i<couleur.length; i++){
    random = Math.floor((Math.random() * couleur.length));
    if(randomCouleur[random] == "vide"){
    randomCouleur[random] = couleur[i];
    }
    else{
      i--;
    }
  }
//  console.log(randomCouleur);

//  console.log(listeCarte);
}

function essais(nbCarte){
      listeCarte[nbCarte].style.backgroundColor = randomCouleur[nbCarte];
      nbEssais++;
      console.log(nbEssais);
      if(nbEssais == 1){
        test1 = nbCarte;
      }
      else if (nbEssais == 2) {
        test2 = nbCarte;
        /*else if (nbEssais == 2 && test1 == test 2){
          message.innerHTML = "vous avez appuyé deux fois sur le même carte";
          nbEssais--;
          return "";
        }*/
        nbEssais = 0;
        console.log(test1,test2);
        comparaison(test1,test2);
      }
}

function comparaison(test1, test2){
  compte--;
  compteur.innerHTML = compte;
  if (compte === 0) {
    for (var i = 0; i < listeCarte.length; i++) {
      listeCarte[i].style.display = "none";
    }
    message.style.display = "inline-block";
    message.innerHTML = "vous avez perdu";
  }
  if(listeCarte[test1].style.backgroundColor == listeCarte[test2].style.backgroundColor){
    pointJoueur += 1;
    pointInterface.innerHTML = pointJoueur;
    console.log(pointJoueur);
    if (pointJoueur == 7) {
      setTimeout(function(){ finPartie(); }, 1500);
    }
  }
  else{
    setTimeout(function () {
      cache(test1,test2);
    }, 1000);
  }
}

function cache(test1, test2){
  listeCarte[test1].style.backgroundColor = "grey";
  listeCarte[test2].style.backgroundColor = "grey";
}

function finPartie(){
  for (var i = 0; i < listeCarte.length; i++) {
    listeCarte[i].style.display = "none";
  }
  message.style.display = "inline-block";
  message.innerHTML = "vous avez gagné";
}

function nouvellePartie(){
  compte = 15;
  compteur.innerHTML = compte;
  pointJoueur = 0;
  pointInterface.innerHTML = pointJoueur;
  message.style.display = "none";
  for (var i = 0; i < listeCarte.length; i++) {
    listeCarte[i].style.backgroundColor = "grey";
    listeCarte[i].style.display = "inline-block";
    randomCouleur[i] = "vide";
  }
  console.log("nouvelle partie");
  creationJeu();
}
