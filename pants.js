// Pants
function getPants() {
  var number = Math.floor(Math.random()*randomPants.length);
  document.getElementById("pantsDisplay").innerHTML =('<img src="'+randomPants[number]+'" />');
}

var randomPants = new Array();
randomPants[0] = "https://s7d5.scene7.com/is/image/Anthropologie/4123650590089_029_b";
randomPants[1] = "https://s7d5.scene7.com/is/image/Anthropologie/53208260_037_b2";
randomPants[2] = "https://s7d5.scene7.com/is/image/Anthropologie/4122261180208_005_b";
