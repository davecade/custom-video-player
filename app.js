const videoEl = document.querySelector('.screen')
const fullScreen = document.querySelector('.fullscreen')
const playEl = document.querySelector('.play')
const stopEl = document.querySelector('.stop')

/* View in fullscreen */
function openFullscreen() {
    if (videoEl.requestFullscreen) {
      videoEl.requestFullscreen();
    } else if (videoEl.webkitRequestFullscreen) { /* Safari */
      videoEl.webkitRequestFullscreen();
    } else if (videoEl.msRequestFullscreen) { /* IE11 */
      videoEl.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
}

fullScreen.addEventListener('click', openFullscreen);

playEl.addEventListener('click', () => videoEl.play());
stopEl.addEventListener('click', () => console.log("clicked on stop"));