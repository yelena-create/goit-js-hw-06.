const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgList = document.querySelector('.gallery');
console.log(imgList);

const imgItem = images.map(el => {
  return `
  <li>
  <img src="${el.url}" alt="${el.alt}" width="150"> 
  </li>`
  })
  .join('');

imgList.insertAdjacentHTML('afterbegin', imgItem);




// const element = images.map(image => {
//   const rowEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 150;
//   rowEl.appendChild(imgEl);
//   return rowEl;
// });
// galleryEl.append(...element);
