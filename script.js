// Unsplash API
const count = 30;
const apiKey = "HtG8M0iPzyC9YIQCF0KOhe6gOmRWqjd5Cyx6tB5JDU8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];
let readyToLoadImagesAgain = false;
let imagesLoaded = 0;
let totalImages = 0;

// Helper functions
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function onImageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    readyToLoadImagesAgain = true;
    loader.hidden = true;
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  photosArray.forEach((photo) => {
    // Create <a> link to unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    // create <img> for the photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", onImageLoaded);

    // Insert the img into the a element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function displayPhotosFromApi() {
  try {
    //   Get the photos from the API
    const response = await fetch(apiUrl);
    photosArray = await response.json();

    displayPhotos();
  } catch (error) {}
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    readyToLoadImagesAgain
  ) {
    displayPhotosFromApi();
    readyToLoadImagesAgain = false;
  }
});
displayPhotosFromApi();
