// task 1 --------------------
function getWeather(city = 'Berlin') {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14d67f93a50fe7d556154b3fc36dba07`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);

            document.querySelector('.city').textContent = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;C';
            document.querySelector('.decription').textContent = data.weather[0]['description'];
            document.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="img">`;
            document.querySelector('.wind').innerHTML = `${data.wind.speed} m/s`;

        })
        .catch(function () {

        });
}
getWeather()

document.querySelector('.choiseSity').onchange = () => {

    let select = document.querySelector('.choiseSity');
    getWeather(select.value);
}


document.querySelector('.btn').onclick = () => {

    let input = document.querySelector('.inputSity').value;
    if (input !== '') getWeather(input);
}

