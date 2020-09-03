// Accessory
function getAccessory() {
  var number = Math.floor(Math.random()*randomAccessory.length);
  document.getElementById("accessoryDisplay").innerHTML =('<img src="'+randomAccessory[number]+'" />');
}

var randomAccessory = new Array();
randomAccessory[0] = "/images/Acc-1.PNG";
randomAccessory[1] = "/images/Acc-2.PNG";
randomAccessory[2] = "/images/Acc-3.PNG";

