import galleryItems from './gallery-items.js';

const refs = {
 galleryRef: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]')
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



function clickEvent(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
refs.lightbox.querySelector('.lightbox__image').src = e.target.dataset.source;
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;;
  }
}

function closeEvent(e) {
  if(e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
    refs.lightbox.classList.remove('is-open');
    refs.lightbox.setAttribute("src", "")
    refs.lightbox.setAttribute("alt", "")
  }
}

refs.galleryRef.addEventListener('click', clickEvent);
refs.btn.addEventListener('click', closeEvent);