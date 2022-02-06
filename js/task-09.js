const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

const RandomHexColor = getRandomHexColor();

buttonRef.addEventListener('click', onBackgroundColorChange);

function onBackgroundColorChange() { 
  console.log('hello');
  spanRef.textContent = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = spanRef.textContent;
  console.log(document.body.style.backgroundColor);
  console.log(spanRef.textContent);
  };
    
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }