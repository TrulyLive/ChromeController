//Nothing here now.

console.log("Truly Live INTERCEPT script TIMER!")
setTimeout(setUserVideoWidth, 1000);

function setUserVideoWidth() {
  console.log("Truly Live INTERCEPT script RUNNING!")
  if (document.getElementById('user-video')) {
    if (document.getElementById('user-video')) {
      document.getElementById('user-video').style.width='824px'
    document.getElementById('user-video').style.height='466px'
    document.getElementById('user-video').style.left='122px'
    document.getElementById('user-video').style.top='15px'
  }
}
