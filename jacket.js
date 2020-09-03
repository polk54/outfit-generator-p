// Jacket
function getJacket() {
  var number = Math.floor(Math.random()*randomJacket.length);
  document.getElementById("jacketDisplay").innerHTML =('<img src="'+randomJacket[number]+'" />');
}

var randomJacket = new Array();
randomJacket[0] = "https://s7d5.scene7.com/is/image/Anthropologie/4113690510006_080_b";
randomJacket[1] = "https://s7d5.scene7.com/is/image/Anthropologie/4113529100070_004_b";
randomJacket[2] = "https://s7d5.scene7.com/is/image/Anthropologie/4133380630020_090_b";
