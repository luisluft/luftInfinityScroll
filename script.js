// Unsplash API
const count = 10;
const apiKey = "HtG8M0iPzyC9YIQCF0KOhe6gOmRWqjd5Cyx6tB5JDU8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotosFromApi() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

getPhotosFromApi();
