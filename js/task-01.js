const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: `, itemEl.length);

const quontityEl = document.querySelectorAll(" .item ul");

for (let i = 0; i < itemEl.length; i+=1) {
    const textEl = itemEl[i].firstElementChild;
console.log(`Categories: `,textEl.textContent);
    const number = quontityEl[i].children;
console.log(`Elements: `,number.length);

    
}













