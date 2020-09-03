// Accessory
function getAccessory() {
  var number = Math.floor(Math.random()*randomAccessory.length);
  document.getElementById("accessoryDisplay").innerHTML =('<img src="'+randomAccessory[number]+'" />');
}

var randomAccessory = new Array();
randomAccessory[0] = "https://polk54.github.io/outfit-generator-p/images/Acc-1.PNG";
randomAccessory[1] = "https://polk54.github.io/outfit-generator-p/images/Acc-2.PNG";
randomAccessory[2] = "https://polk54.github.io/outfit-generator-p/images/Acc-3.PNG";

