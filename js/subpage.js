function changeSRC (buttonID) {
  var thisButton = document.getElementById(buttonID);
  var newSRC = "../buttons/" + buttonID + "_hover.jpg";
  thisButton.src=newSRC;
}

function revertSRC (buttonID) {
  var thisButton = document.getElementById(buttonID);
  var newSRC = "../buttons/" + buttonID + ".jpg";
  thisButton.src=newSRC;
}