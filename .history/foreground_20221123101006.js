//Nothing here now.

//function fullScreen() {
//    var elem = document.documentElement;
//    elem.requestFullscreen();
//}

//fullScreen();

function keepServiceRunning() {
    setTimeout(keepServiceRunning, 2000);
    console.log("Keep Service Running.")
  }

keepServiceRunning()