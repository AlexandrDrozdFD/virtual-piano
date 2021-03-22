const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
let pianoKeysArr = [...pianoKeys];

function getSRC(eventTargetDatasetNote) {
  return `./assets/audio/${eventTargetDatasetNote}.mp3`
}
function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
};

function onMouseDown(e) {
  if (e.target.classList.contains('piano-key')) {
    e.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
    playAudio(getSRC(e.target.dataset.note));
  }
  pianoKeys.forEach((key) => {
    key.addEventListener('mouseover', onMouseOver);
    key.addEventListener('mouseout', onMouseOut);
  });
}

function onMouseOver(e) {
  if (e.target.classList.contains('piano-key')) {
    e.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
    playAudio(getSRC(e.target.dataset.note));
  }
}

function onMouseOut(e) {
    e.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
}

function onMouseUp(e) {
  pianoKeys.forEach((key) => {
    key.classList.remove('piano-key-active', 'piano-key-active-pseudo');
    key.removeEventListener('mouseover', onMouseOver)
    key.removeEventListener('mouseout', onMouseOut)
  });
}

piano.addEventListener('mousedown', onMouseDown);
document.querySelector('body').addEventListener('mouseup', onMouseUp);


window.addEventListener('keydown', (e) => {
  console.log(e.code)
  return pianoKeysArr.filter((key) => {
    return key.dataset.letter === e.code.replace('Key', '');
  })
  .map((key) => {
    if (e.repeat) {
      return;
    } 
    playAudio(getSRC(key.dataset.note));
    key.classList.add('active', 'piano-key-active');
  });
});

window.addEventListener('keyup', (e) => {
  return pianoKeysArr.filter((key) => {
    return key.dataset.letter === e.code.replace('Key', '');
  })
  .map((key) => {
    key.classList.remove('active', 'piano-key-active');
  });
});