// Shirts
function getShirt() {
  var number = Math.floor(Math.random()*randomShirt.length);
  document.getElementById("shirtDisplay").innerHTML =('<img src="'+randomShirt[number]+'" />');
}

var randomShirt = new Array();
randomShirt[0] = "https://polk54.github.io/outfit-generator-p/images/Top-1.PNG";
randomShirt[1] = "https://polk54.github.io/outfit-generator-p/images/Top-2.PNG";
randomShirt[2] = "https://polk54.github.io/outfit-generator-p/images/Top-3.PNG";
