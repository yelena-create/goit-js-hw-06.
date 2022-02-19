const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: `, itemEl.length);

itemEl.forEach(el => {
    
const h2 = el.querySelector('h2');
const elItems = el.querySelectorAll('li');
    // console.log(elItems)
console.log(
`Categories: ${h2.textContent}
 Elements: ${elItems.length}`);
});










