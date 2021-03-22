const btn_fullscreen = document.querySelector('.fullscreen')

btn_fullscreen.addEventListener('click', toggleFullScreen)

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}