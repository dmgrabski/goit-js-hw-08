//import _default from '../../node_modules/simplelightbox/dist/simple-lightbox';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryMarkup(galleryItems);

  galleryContainer.innerHTML = galleryMarkup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `
        <a class="gallery__item" href="${item.original}">
          <img 
            class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}" 
          />
        </a>`
    )
    .join('');
}
