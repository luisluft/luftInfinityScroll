const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];

function displayPhotos() {
  console.log(photosArray);
  photosArray.forEach((photo) => {
    // Create <a> link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    // create <img> for the photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // Insert the img into the a element
    item.appendChild(img);
    imageContainer.appendChild(item);
    console.log(item);
  });
}

// Unsplash API
const count = 30;
const apiKey = "HtG8M0iPzyC9YIQCF0KOhe6gOmRWqjd5Cyx6tB5JDU8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotosFromApi() {
  try {
    //   Get the photos from the API
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

getPhotosFromApi();
