// Shoes
function getShoes() {
  var number = Math.floor(Math.random()*randomShoes.length);
  document.getElementById("shoesDisplay").innerHTML =('<img src="'+randomShoes[number]+'" />');
}
var randomShoes = new Array();
randomShoes[0] = "https://polk54.github.io/outfit-generator-p/images/Shoes-1.PNG";
randomShoes[1] = "https://polk54.github.io/outfit-generator-p/images/Shoes-2.PNG"";
randomShoes[2] = "https://polk54.github.io/outfit-generator-p/images/Shoes-3.PNG"";
randomShoes[3] = "https://polk54.github.io/outfit-generator-p/images/Shoes-4.PNG"";
randomShoes[4] = "https://polk54.github.io/outfit-generator-p/images/Shoes-5.PNG"";
randomShoes[5] = "https://polk54.github.io/outfit-generator-p/images/Shoes-6.PNG"";
randomShoes[6] = "https://polk54.github.io/outfit-generator-p/images/Shoes-7.PNG"";
