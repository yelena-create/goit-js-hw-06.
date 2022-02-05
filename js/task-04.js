const refs = {
    decrementBtnRef: document.querySelector('[data-action="decrement"]'),
    incrementBtnRef: document.querySelector('[data-action="increment"]'),
    counterValueRef: document.querySelector('#value'),
};

refs.decrementBtnRef.addEventListener('click', onDecrementBtnRefClick);
refs.incrementBtnRef.addEventListener('click', onIncrementBtnRefClick);
refs.counterValueRef.textContent = '0';

let counterValue = 0;
function onDecrementBtnRefClick() {
    counterValue -= 1;
    refs.counterValueRef.textContent = counterValue;
    // return
     }

function onIncrementBtnRefClick() { 
    counterValue += 1;
    refs.counterValueRef.textContent = counterValue;
    // return
    
}









