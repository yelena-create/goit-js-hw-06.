const inputSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputSizeControl.addEventListener('click', onTextFontChange);

function onTextFontChange(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}








