//Nothing here now.

//function fullScreen() {
//    var elem = document.documentElement;
//    elem.requestFullscreen();
//}

//fullScreen();

//MIGHT WORK!
function keepServiceRunning() {
    setTimeout(keepServiceRunning, 2000);
    console.log("Keep Service Running.")
  }

keepServiceRunning()