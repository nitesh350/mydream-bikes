document.querySelector("#open-nav-menu").addEventListener('click', function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector('#close-nav-menu').addEventListener('click',function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
})

// thumnail effects 
// // Get all thumbnail images and the images to display
// const thumbnails = document.querySelectorAll('.thumbnails img');
// const displayImages = document.querySelectorAll('.gallery-section img');

// // Add click event listener to each thumbnail
// thumbnails.forEach((thumbnail, index) => {
//   thumbnail.addEventListener('click', () => {
//     // Hide all display images
//     displayImages.forEach(image => {
//       image.style.display = 'none';
//     });

//     // Show the clicked image
//     displayImages[index].style.display = 'block';
//   });
// });

// Get the main image and all thumbnail images
const mainImage = document.querySelector('.gallery-section img');
const thumbnails = document.querySelectorAll('.thumbnails img');

// Add click event listener to each thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // Get the src and alt attributes of the clicked thumbnail
    const thumbnailSrc = thumbnail.getAttribute('src');
    const thumbnailAlt = thumbnail.getAttribute('alt');
    
    // Set the main image src and alt attributes to the clicked thumbnail's values
    mainImage.setAttribute('src', thumbnailSrc);
    mainImage.setAttribute('alt', thumbnailAlt);
  });
});


// // weather apis
//   // Fetch weather data from an API (replace 'YOUR_WEATHER_API_ENDPOINT' with the actual API endpoint)
//   fetch('YOUR_WEATHER_API_ENDPOINT')
//     .then(response => response.json())
//     .then(weatherData => {
//       const temperatureElement = document.getElementById('weather');
//       temperatureElement.textContent = `The weather is ${weatherData.description} in ${weatherData.location} and it’s ${weatherData.temperature}°C outside.`;
//     })
//     .catch(error => {
//       console.error('Error fetching weather data:', error);
//     });

//   // Function to update the local time
//   function updateLocalTime() {
//     const timeElements = document.querySelectorAll('.time-number');
//     const now = new Date();
//     timeElements[0].textContent = String(now.getHours()).padStart(2, '0');
//     timeElements[1].textContent = String(now.getMinutes()).padStart(2, '0');
//     timeElements[2].textContent = String(now.getSeconds()).padStart(2, '0');
//     }

//     // Update local time every second
//   setInterval(updateLocalTime, 1000);

//   // Initial call to update time
//   updateLocalTime();


// Fetch weather data from the OpenWeatherMap API
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const CITY_NAME = 'Kathmandu'; // Replace with the desired city name

const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

fetch(weatherEndpoint)
  .then(response => response.json())
  .then(weatherData => {
    const temperatureElement = document.getElementById('weather');
    temperatureElement.textContent = `The weather is ${weatherData.weather[0].description} in ${weatherData.name} and it’s ${weatherData.main.temp}°C outside.`;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

// Function to update the local time
function updateLocalTime() {
  const timeElements = document.querySelectorAll('.time-number');
  const now = new Date();
  timeElements[0].textContent = String(now.getHours()).padStart(2, '0');
  timeElements[1].textContent = String(now.getMinutes()).padStart(2, '0');
  timeElements[2].textContent = String(now.getSeconds()).padStart(2, '0');
}

// Update local time every second
setInterval(updateLocalTime, 1000);

// Initial call to update time
updateLocalTime();
