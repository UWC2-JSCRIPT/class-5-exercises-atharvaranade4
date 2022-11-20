// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headline = document.getElementById('weather-head');
headline.innerHTML = 'February 10 Weather Forecast, Seattle';


// Change the styling of every element with class "sun" to set the color to "orange"
const sunElement = document.querySelectorAll('.sun');
sunElement.forEach(element => {
    element.style.color = 'orange';
});


// Change the class of the second <li> from to "sun" to "cloudy"
const liItems = document.querySelectorAll('li')
console.log(liItems)
liItems[1].classList.replace('sun', 'cloudy')