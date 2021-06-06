// Helper functions
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];

function displayPhotos() {
  console.log(photosArray);
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

    // Insert the img into the a element
    item.appendChild(img);
    imageContainer.appendChild(item);
    console.log(item);
  });
}

// Unsplash API
const count = 10;
const apiKey = "HtG8M0iPzyC9YIQCF0KOhe6gOmRWqjd5Cyx6tB5JDU8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function displayPhotosFromApi() {
  try {
    //   Get the photos from the API
    const response = await fetch(apiUrl);
    photosArray = await response.json();

    displayPhotos();
  } catch (error) {}
}

displayPhotosFromApi();
