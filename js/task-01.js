const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: `, itemEl.length);

const ulEl = document.querySelectorAll(" .item ul");

itemEl.forEach(el => {
    const textEl = el.firstElementChild;
    console.log(`Categories: `, textEl.textContent);
    const number = el.children;
    console.log(`Elements: `, number.length);
    
});



// itemEl.forEach(el => {
    
// const h2 = el.querySelector('h2');
// const elItems = el.querySelectorAll('li');
    
// console.log(
// `Categories: ${h2.textContent}
//  Elements: ${elItems.length}`);
// });










