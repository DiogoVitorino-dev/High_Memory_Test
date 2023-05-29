const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
const tutorial = document.getElementById('tutorialVideo');
const buttonTutorial = document.getElementById('tutorialButton');

const showTutorial = () => {  
  let video = tutorial.getElementsByTagName('video')[0]

  if (tutorial.style.display === "none") {    
    tutorial.style.display = "flex"
    video.style.display = "block"
    video.focus()
  } else {
    tutorial.style.display = "none"  
    video.style.display = "none" 
    video.pause()
  } 
}

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
buttonTutorial.addEventListener('click', showTutorial);
tutorial.addEventListener('focusout', showTutorial);
