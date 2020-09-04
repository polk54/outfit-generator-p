// Jacket
function getJacket() {
  var number = Math.floor(Math.random()*randomJacket.length);
  document.getElementById("jacketDisplay").innerHTML =('<img src="'+randomJacket[number]+'" />');
}

var randomJacket = new Array();
randomJacket[0] = "https://polk54.github.io/outfit-generator-p/images/Jacket-1.jpg";
randomJacket[1] = "https://polk54.github.io/outfit-generator-p/images/Jacket-2.jpg";
randomJacket[2] = "https://polk54.github.io/outfit-generator-p/images/Jacket-3.jpg";
randomJacket[3] = "https://polk54.github.io/outfit-generator-p/images/Jacket-4.jpg";
randomJacket[4] = "https://polk54.github.io/outfit-generator-p/images/Jacket-5.jpg";
