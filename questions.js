/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
  //retourné la taille de caractère
    return texte.length;
}
var remplaceECar = function (texte) {
  //remplacer un caractère dans une chaine de caractère
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
  //concaténation
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
  //affiche la cinquième caractère
    return texte[4];
}
var afficher9Car = function (texte) {
  //Afficher les neuf prémier mot
    return texte.substring(0,9);
}
var majusculeString = function (texte) {
  //En majuscule
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
  //En Minuscule
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
  //Supprimer les espaces avant et après le caractère
    return texte.trim();
}
var IsString = function (texte) {
  //comparer si la variable est string = true
  if (typeof texte == 'string'){
    return (true);
  }
}
var AfficherExtensionString = function (texte) {
  /*on met une fonction qui retourne une sous chaine de la chaine courante
  entre un indice du début et la fin "texte.substring". Ensuite, dans la fonction
  on met une fonction definie la position du caractère "texte.indexof('.')+1, texte.length"*/
    return (texte.substring(texte.indexOf('.')+1, texte.length));
}
var NombreEspaceString = function (texte) {
  //Split sert à couper la chaine de caractère et le rendre en tableau
    return texte.split(' ').length - 1;;
}
var InverseString = function (texte) {
  //Split sert à couper la chaine de caractère et le rendre en tableau
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  //Calcul de puissance
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre){
  //afficher la valeur absolue d'un nombre
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  /*valeur absolue de plusieurs nombre
  array.map = permet de faire une fonction pour toute les ligne du tableau*/
    return array.map(Math.abs);
}
var sufaceCercle = function (rayon){
  var valeur = (Math.pow(rayon,2)* Math.PI);
    return Math.ceil(valeur);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac);
}
var calculIMC = function (poids, taille) {
  //parseFloat = rendre les chaines de caractère en nombre
    return parseFloat((poids/(taille * taille)).toFixed(2));
}
