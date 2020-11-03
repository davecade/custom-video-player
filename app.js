const videoEl = document.querySelector('.screen')
const fullScreen = document.querySelector('.fullscreen')
const playEl = document.querySelector('.play')
const stopEl = document.querySelector('.stop')
const playIcon = document.querySelector('.play i')
const progressEl = document.querySelector('.progress')
const timeEl = document.querySelector('.timestamp')
const overlayEl = document.querySelector('#screen-overlay')
const overlayIconEl = document.querySelector("#screen-icon")
const volumeEl = document.querySelector('#volume')
let isFullScreen = false;


/* View in fullscreen */
function openFullscreen() {
  isFullScreen = true;
  if (videoEl.requestFullscreen) {
    videoEl.requestFullscreen();
  } else if (videoEl.webkitRequestFullscreen) {
    /* Safari */
    videoEl.webkitRequestFullscreen();
  } else if (videoEl.msRequestFullscreen) {
    /* IE11 */
    videoEl.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

const setValue = (element, value) => {
  element.innerHTML = value;
}

const toggleVideoStatus = () => {

  if(isFullScreen===false) {
    if (videoEl.paused) {
      videoEl.play()
      setValue(playEl, '<i class="fas fa-pause"></i>')
      overlayIconEl.classList.remove('fas', 'fa-play')
      overlayIconEl.classList.add('fas', 'fa-pause')
      
    } else {
      videoEl.pause()
      setValue(playEl, '<i class="fas fa-play"></i>')
      overlayIconEl.classList.remove('fas', 'fa-pause')
      overlayIconEl.classList.add('fas', 'fa-play')
    }
  }
}

const stopVideo = () => {
  videoEl.currentTime = 0
  videoEl.pause();
  overlayIconEl.classList.remove('fas', 'fa-pause')
  overlayIconEl.classList.add('fas', 'fa-play')

  if(playIcon.classList.contains('fas', 'fa-pause')) {
    setValue(playEl, '<i class="fas fa-play"></i>')
  }
}


const updateProgress = () => {
  // -- Converting the video time from minutes to equivalent percentage
  progressEl.value = (videoEl.currentTime / videoEl.duration) * 100;

  // -- get minutes
  let mins = Math.floor(videoEl.currentTime / 60);
  if (mins < 10) {
      mins = `0${String(mins)}`
  }

  // -- get seconds
  let secs = Math.floor(videoEl.currentTime % 60);
  if (secs < 10) {
      secs = `0${String(secs)}`
  }

  timeEl.innerHTML = `${mins}:${secs}`

}

const updateVideo = () => {
  // -- Converting the progress back from percentage back to equivalent minutes
  videoEl.currentTime = (progressEl.value * videoEl.duration) / 100;
}

const updateVolume = () => {
  videoEl.volume = volumeEl.value/100;
  console.log(videoEl.volume)
}

const enableOverlay = () => {
  overlayEl.style = "display: block";
  overlayIconEl.style = "display: block"
}

const disableOverlay = () => {
  overlayEl.style = "display: none";
  overlayIconEl.style = "display: none"
}


fullScreen.addEventListener('click', openFullscreen);
playEl.addEventListener('click', toggleVideoStatus);
stopEl.addEventListener('click', stopVideo);
videoEl.addEventListener('click', toggleVideoStatus)
overlayEl.addEventListener('click', toggleVideoStatus)
videoEl.addEventListener("mouseover", enableOverlay)
videoEl.addEventListener("mouseleave", disableOverlay)
overlayEl.addEventListener("mouseover", enableOverlay)
overlayEl.addEventListener("mouseleave", disableOverlay)
videoEl.addEventListener('timeupdate', updateProgress)
progressEl.addEventListener('change', updateVideo)
volumeEl.addEventListener('change', updateVolume)
overlayEl.addEventListener("dblclick", openFullscreen)
videoEl.addEventListener('dblclick', openFullscreen)

// -- Checks if the video is on Fullscreen on Normal screen
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
      isFullScreen = true;
  } else {
      isFullScreen = false;
  }
});