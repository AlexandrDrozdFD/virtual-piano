const btns = document.querySelector('.btn-container');
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');

btnNotes.classList.add('btn-active');

btns.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-letters')) {
    btnNotes.classList.remove('btn-active');
    btnLetters.classList.add('btn-active');
    pianoKeys.forEach((key) => {
      key.classList.add('piano-key-letter');
    });
  }

  if (e.target.classList.contains('btn-notes')) {
    btnNotes.classList.add('btn-active');
    btnLetters.classList.remove('btn-active');
    pianoKeys.forEach((key) => {
      key.classList.remove('piano-key-letter');
    });
  }
})

