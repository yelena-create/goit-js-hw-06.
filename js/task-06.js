const inputRef = document.querySelector('input');
 
inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    console.log('знаков потере фокуса ', inputRef.value.length);
console.log(inputRef.value);
console.log('dataset',+inputRef.dataset.length);
 
const inputData = Number(inputRef.dataset.length);

    if (inputRef.value.length === inputData) {
        console.log('hello');
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    
    } else {inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
    
    
 }

















