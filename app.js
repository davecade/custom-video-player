const videoEl = document.querySelector('.screen')
const fullScreen = document.querySelector('.fullscreen')
const playEl = document.querySelector('.play')
const stopEl = document.querySelector('.stop')
const playIcon = document.querySelector('.play i')
const progressEl = document.querySelector('.progress')
const timeEl = document.querySelector('.timestamp')


/* View in fullscreen */
function openFullscreen() {
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
  if (videoEl.paused) {
    videoEl.play()
    setValue(playEl, '<i class="fas fa-pause"></i>')
  } else {
    videoEl.pause()
    setValue(playEl, '<i class="fas fa-play"></i>')
  }
}

const stopVideo = () => {
  videoEl.currentTime = 0
  videoEl.pause();

  if(playIcon.classList.contains('fas', 'fa-pause')) {
    setValue(playEl, '<i class="fas fa-play"></i>')
  }
}


// const updateProgress = () => {
//   progressEl.value = (videoEl.currentTime / videoEl.duration) * 100;

//   // -- get minutes
//   let mins = Math.floor(video.currentTime / 60);
//   if (mins < 10) {
//       mins = `0${String(mins)}`
//   }

//   // -- get seconds
//   let secs = Math.floor(video.currentTime % 60);
//   if (secs < 10) {
//       secs = `0${String(secs)}`
//   }

//   timeEl.innerHTML = `${mins}:${secs}`

// }


fullScreen.addEventListener('click', openFullscreen);
playEl.addEventListener('click', toggleVideoStatus);
stopEl.addEventListener('click', stopVideo);
videoEl.addEventListener('timeupdate', updateProgress)