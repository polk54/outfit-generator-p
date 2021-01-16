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
randomJacket[5] = "https://polk54.github.io/outfit-generator-p/images/Jacket-6.jpg";
randomJacket[6] = "https://polk54.github.io/outfit-generator-p/images/Jacket-7.jpg";
//randomJacket[5] = "https://polk54.github.io/outfit-generator-p/images/Jacket-8.jpg";
//randomJacket[5] = "https://polk54.github.io/outfit-generator-p/images/Jacket-9.jpg";
//randomJacket[5] = "https://polk54.github.io/outfit-generator-p/images/Jacket-10.jpg";
//randomJacket[5] = "https://polk54.github.io/outfit-generator-p/images/Jacket-11.jpg";
