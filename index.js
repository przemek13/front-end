const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const toggleBackgroundButton = document.querySelector('.toggle-background');
const weather = document.querySelector('.weather');

const elements = [header, footer]

const toggleBackground = () => {
    if (body.classList.contains('background-white')) {
        body.classList.remove('background-white')
        body.classList.add('background-dark')

        elements.forEach(element => {
            element.classList.remove('background-blue');
            element.classList.add('background-yellow');
        })
    }
    else {
        body.classList.remove('background-dark')
        body.classList.add('background-white')
        
        elements.forEach(element => {
            element.classList.remove('background-yellow');
            element.classList.add('background-blue');
        })
    }
};
toggleBackgroundButton.addEventListener('click', toggleBackground);

fetch('http://api.openweathermap.org/data/2.5/weather?q=Szczecin,pl&units=metric&appid=b8b342f32a9b8e08220155cb09a4fc76')
.then(response => response.json())
.then(data => {
    weather.innerHTML = `Weather in ${data.name}, ${data.sys.country} of ${new Date().toLocaleDateString()}:
    <div class="weather-conditions"><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">
    <span>Temperature: ${data.main.temp}&#8451;</span><span>pressure: ${data.main.pressure} kPa</span></div>`;
  });