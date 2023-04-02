/*
Group members-
	
Mohit Kumar
Hetanshu Sonar
Ankita Ankita
Sairaj Kondalwade

*/

// Initialize and declare variables
const featuredImage = document.querySelector('#gallery img');
const thumbBarCaption = document.querySelector('#gallery figcaption');
const thumbnailImages = document.querySelector('#imageList');

//Adding elements to the array of image objects
const gallery = [
    {
        src: 'images/flowers-pink-small.jpg',
        alt: 'Pink Beautiful Flowers at Flower stall at the market in Münster, North Rhine-Westphalia, Germany (2017)',
    },
    {
        src: 'images/flowers-purple-small.jpg',
        alt: 'Purple Elegant Flowers at Sentmaring Park, Münster, North Rhine-Westphalia, Germany (2016)',
    },
    {
        src: 'images/flowers-red-small.jpg',
        alt: 'Red Radiant Flowers, Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany (2015)',
    },
    {
        src: 'images/flowers-white-small.jpg',
        alt: 'White Delicate Flowers, Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany (2016)',
    },
    {
        src: 'images/flowers-yellow-small.jpg',
        alt: 'Yellow Pretty Flowers, Sunflowers in the Dernekamp hamlet, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany (2017)',
    }
];

//Loop to go through all the items and their properties
for (let i = 0; i < gallery.length; i++) {
  const listItem = document.createElement('li');
  const listImage = document.createElement('img');

  listImage.src = gallery[i].src;
  listImage.alt = gallery[i].alt;
  listImage.height = '160'; 
  listImage.width = '240';

  listItem.appendChild(listImage);
  thumbnailImages.appendChild(listItem);

  listImage.addEventListener('click', function(){
    thumbBarCaption.classList.add('selected');
    //Grabbing the src atribute of the image that was clicked
    const thumbnailSrc = listImage.getAttribute('src');
    const thumbnailAlt = listImage.getAttribute('alt');

    //Update the larger image
    featuredImage.setAttribute('src', thumbnailSrc);
    featuredImage.setAttribute('alt', thumbnailAlt);

    // Update the caption of the displaying image
    thumbBarCaption.textContent = thumbnailAlt;
  });
}
