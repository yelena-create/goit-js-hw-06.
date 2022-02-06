const buttonRef = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.widget');
const spanRef = document.querySelector('.color');

buttonRef.addEventListener('click', onBackgroundColorChange);

function onBackgroundColorChange() { 
    console.log('hello');
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanRef.textContent = `${getRandomHexColor()}`;
  };
    
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(Math.floor(Math.random() * 16777215).toString(16))