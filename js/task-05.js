const refs = {
    inputRef: document.querySelector('#name-input'),
    outputRef:document.querySelector('h1>span'),
}
refs.inputRef.addEventListener('input',onInputChange )



function onInputChange() {
    refs.outputRef.textContent = refs.inputRef.value;
 }














