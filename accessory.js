// Accessory
function getAccessory() {
  var number = Math.floor(Math.random()*randomAccessory.length);
  document.getElementById("accessoryDisplay").innerHTML =('<img src="'+randomAccessory[number]+'" />');
}

var randomAccessory = new Array();
randomAccessory[0] = "https://www.dropbox.com/s/6xwtw5y3hh8a1yv/Acc-1.PNG?dl=0";
randomAccessory[1] = "https://www.dropbox.com/s/9v7cc7a0f6zx8fc/Acc-2.PNG?dl=0";
randomAccessory[2] = "https://www.dropbox.com/s/4sg1mibti6wp1b4/Acc-3.PNG?dl=0";

