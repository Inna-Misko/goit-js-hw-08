import galleryItems from './gallery-items.js';

const refs = {
 galleryRef: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector('.lightbox__overlay')
};


const createList = galleryItems.map(image => {
    const list = `<li class="gallery__item">
      <a
    class="gallery__link"
    href="${image.original}">
  <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></mg>
  </a>
  </li>`
  return list
  });
const finalList = createList.join(' ')
refs.galleryRef.insertAdjacentHTML('afterbegin', finalList)
// const createList = galleryItems.map(image => {
//   const list = image.createElement('li')
//   const aRef = image.createElement('a')
//   const imgRef = image.createElement('img')
//   console.log(list.classList.add('class','gallery__item'))
//  });


function clickEvent(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
refs.lightbox.querySelector('.lightbox__image').src = e.target.dataset.source;
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;;
  }
}

function closeEvent(e) {
  if(e.target.nodeName === "I" || e.target.nodeName === "BUTTON" || e.code === 'Escape' || e.target === e.currentTarget) {
    refs.lightbox.classList.remove('is-open');
    refs.lightbox.setAttribute("src", "")
    refs.lightbox.setAttribute("alt", "")
  }
}
refs.modal.addEventListener('click', closeEvent)
 window.addEventListener('keydown',closeEvent);
refs.galleryRef.addEventListener('click', clickEvent);
refs.btn.addEventListener('click', closeEvent);

