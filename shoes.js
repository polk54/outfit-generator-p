// Shoes
function getShoes() {
  var number = Math.floor(Math.random()*randomShoes.length);
  document.getElementById("shoesDisplay").innerHTML =('<img src="'+randomShoes[number]+'" />');
}
var randomShoes = new Array();
randomShoes[0] = "https://polk54.github.io/outfit-generator-p/images/Shoes-1.jpg";
randomShoes[1] = "https://polk54.github.io/outfit-generator-p/images/Shoes-2.jpg";
randomShoes[2] = "https://polk54.github.io/outfit-generator-p/images/Shoes-3.jpg";
randomShoes[3] = "https://polk54.github.io/outfit-generator-p/images/Shoes-4.jpg";
randomShoes[4] = "https://polk54.github.io/outfit-generator-p/images/Shoes-5.jpg";
randomShoes[5] = "https://polk54.github.io/outfit-generator-p/images/Shoes-6.jpg";
randomShoes[6] = "https://polk54.github.io/outfit-generator-p/images/Shoes-7.jpg";
