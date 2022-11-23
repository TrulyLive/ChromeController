//Nothing here now.

console.log("Truly Live INTERCEPT script TIMER!")
setTimeout(setUserVideoWidth, 1000);

function setUserVideoWidth() {
  console.log("Truly Live INTERCEPT script RUNNING!")
  document.getElementById('user-video').style.width='px'
  document.getElementById('user-video').style.height='295px'
}
