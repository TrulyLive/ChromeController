//Nothing here now.

console.log("Truly Live INTERCEPT script TIMER!")
setTimeout(setUserVideoWidth, 1000);

function setUserVideoWidth() {
  console.log("Truly Live INTERCEPT script RUNNING!")
  document.getElementById('user-video').style.width='824px'
  document.getElementById('user-video').style.height='427px'
  document.getElementById('user-video').style.left='115px'
  document.getElementById('user-video').style.top='16px'
}
