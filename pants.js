// Pants
function getPants() {
  var number = Math.floor(Math.random()*randomPants.length);
  document.getElementById("pantsDisplay").innerHTML =('<img src="'+randomPants[number]+'" />');
}

var randomPants = new Array();
randomPants[0] = "https://polk54.github.io/outfit-generator-p/images/Bottom-1.jpg";
randomPants[1] = "https://polk54.github.io/outfit-generator-p/images/Bottom-2.jpg";
randomPants[2] = "https://polk54.github.io/outfit-generator-p/images/Bottom-3.jpg";
randomPants[3] = "https://polk54.github.io/outfit-generator-p/images/Bottom-4.jpg";
randomPants[4] = "https://polk54.github.io/outfit-generator-p/images/Bottom-5.jpg";
