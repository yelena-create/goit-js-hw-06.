const inputSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputSizeControlRef.addEventListener('input', onTextFontChange);

function onTextFontChange(event) {
//    const fontSize = Number('${event.currentTarget.value} px');    
    textRef.style.fontSize = `${event.currentTarget.value}px`;

console.log(event.currentTarget.value);
 };



// const inputSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// inputSizeControl.addEventListener('click', onTextFontChange);

// function onTextFontChange(event) {
//     text.style.fontSize = event.currentTarget.value + "px";
//конкантенация строк?
// }


