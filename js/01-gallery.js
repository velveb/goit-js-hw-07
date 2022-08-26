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
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>
   `
 }).join("");

 };

  paletteContainer.addEventListener('click', onPaletteConteinerClick);
  
function onPaletteConteinerClick(evt) {
  evt.preventDefault();
  if(!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`
    ,
    {
            onShow: instance =>
              window.addEventListener("keydown", closeModalEscape),
            onClose: instance =>
              window.removeEventListener("keydown", closeModalEscape),
          }
        );
        instance.show();
        function closeModalEscape(e) {
          if (e.key === "Escape") {
            instance.close();
          };
        };
};

