// outfit
function getOutfit() {
  var number = Math.floor(Math.random()*randomShirt.length);
  document.getElementById("shirtDisplay").innerHTML =('<img src="'+randomShirt[number]+'" />');
  var number = Math.floor(Math.random()*randomPants.length);
  document.getElementById("pantsDisplay").innerHTML =('<img src="'+randomPants[number]+'" />');
  var number = Math.floor(Math.random()*randomAccessory.length);
  document.getElementById("accessoryDisplay").innerHTML =('<img src="'+randomAccessory[number]+'" />');
  var number = Math.floor(Math.random()*randomJacket.length);
  document.getElementById("jacketDisplay").innerHTML =('<img src="'+randomJacket[number]+'" />');
  var number = Math.floor(Math.random()*randomShoes.length);
  document.getElementById("shoesDisplay").innerHTML =('<img src="'+randomShoes[number]+'" />');
}
