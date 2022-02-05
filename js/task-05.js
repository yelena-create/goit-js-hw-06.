const refs = {
    inputRef: document.querySelector('#name-input'),
    outputRef:document.querySelector('h1>span'),
}
refs.inputRef.addEventListener('input',onInputChange )



function onInputChange() {
    if (refs.inputRef.value === '') {
       return refs.outputRef.textContent = 'Anonymous';
     }
    refs.outputRef.textContent = refs.inputRef.value;
 }














