// Accessory
function getAccessory() {
  var number = Math.floor(Math.random()*randomAccessory.length);
  document.getElementById("accessoryDisplay").innerHTML =('<img src="'+randomAccessory[number]+'" />');
}

var randomAccessory = new Array();
randomAccessory[0] = "https://polk54.github.io/outfit-generator-p/images/Acc-1.jpg";
randomAccessory[1] = "https://polk54.github.io/outfit-generator-p/images/Acc-2.jpg";
randomAccessory[2] = "https://polk54.github.io/outfit-generator-p/images/Acc-3.jpg";
randomAccessory[3] = "https://polk54.github.io/outfit-generator-p/images/Acc-4.jpg";
randomAccessory[4] = "https://polk54.github.io/outfit-generator-p/images/Acc-5.jpg";
randomAccessory[5] = "https://polk54.github.io/outfit-generator-p/images/Acc-6.jpg";
randomAccessory[6] = "https://polk54.github.io/outfit-generator-p/images/Acc-7.jpg";
randomAccessory[7] = "https://polk54.github.io/outfit-generator-p/images/Acc-8.jpg";
