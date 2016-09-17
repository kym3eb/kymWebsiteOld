function changeLink (buttonID){
  var thisButton = document.getElementById(buttonID);
  //var matcher = new RegExp("\_h");
  //if(!matcher.test(thisButton.innerHTML)) {
    var newhtml = "<img src=\'buttons/" + buttonID + "_h.jpg\'>";
    thisButton.innerHTML = newhtml;
  //}  
  //else {
  //alert(thisButton.innerHTML);
  //  var newhtml = "<img src=\'buttons/" + buttonID + ".jpg\'>";
  //  thisButton.innerHTML = newhtml;
  //}
}

function revertLink (buttonID) {
  var thisButton = document.getElementById(buttonID);
  var newhtml = "<img src=\'buttons/" + buttonID + ".jpg\'>";
  thisButton.innerHTML = newhtml;
}


function changeSRC (buttonID) {
  var thisButton = document.getElementById(buttonID);
  var newSRC = "buttons/" + buttonID + "_hover.jpg";
  thisButton.src=newSRC;
}

function revertSRC (buttonID) {
  var thisButton = document.getElementById(buttonID);
  var newSRC = "buttons/" + buttonID + ".jpg";
  thisButton.src=newSRC;
}