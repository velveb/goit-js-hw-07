import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(onGreateCliderCards(galleryItems));

const paletteContainer = document.querySelector('.gallery');
const cardsMarcup = onGreateCliderCards(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarcup);


function  onGreateCliderCards(galleryItems) {
   return galleryItems
   .map(({preview, original, description}) => {
  return `
  <a class="gallery__item" href="${original}">
  <img
   class="gallery__image"
    src="${preview}"
    alt="${description}"
</a>
   `
 }).join("");

 };

 let gallery = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250} );
 gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

