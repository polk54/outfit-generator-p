// Shoes
function getShoes() {
  var number = Math.floor(Math.random()*randomShoes.length);
  document.getElementById("shoesDisplay").innerHTML =('<img src="'+randomShoes[number]+'" />');
}
var randomShoes = new Array();
randomShoes[0] = "/images/Shoes-1.PNG";
randomShoes[1] = "/images/Shoes-2.PNG";
randomShoes[2] = "images/Shoes-3.PNG";
randomShoes[3] = "images/Shoes-4.PNG";
randomShoes[4] = "images/Shoes-5.PNG";
randomShoes[5] = "images/Shoes-6.PNG";
randomShoes[6] = "images/Shoes-7.PNG";