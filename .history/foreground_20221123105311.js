//Nothing here now.

console.log("Truly Live INTERCEPT script!")

setTimeout(setUserVideoWidth, 5000);

function setUserVideoWidth() {
  clearTimeout(myTimeout);
}

document.getElementById('user-video').style.width='522px'
document.getElementById('user-video').style.height='295px'
