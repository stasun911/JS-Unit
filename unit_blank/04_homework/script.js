// task 1 --------------------
let cityList = [
    {
        "id": 2968815,
        "name": "Paris",
        "state": "",
        "country": "FR",
        "coord": {
            "lon": 2.3486,
            "lat": 48.853401
        }
    },

    {
        "id": 2950158,
        "name": "Berlin",
        "state": "",
        "country": "DE",
        "coord": {
          "lon": 10.45,
          "lat": 54.033329
        }
      },

      {
        "id": 524894,
        "name": "Moscow",
        "state": "",
        "country": "RU",
        "coord": {
          "lon": 37.606667,
          "lat": 55.761665
        }
      },

    {
        "id": 6453366,
        "name": "Oslo",
        "state": "",
        "country": "NO",
        "coord": {
            "lon": 10.73367,
            "lat": 59.911831
        }
    },

    {
        "id": 625144,
        "name": "Minsk",
        "state": "",
        "country": "BY",
        "coord": {
            "lon": 27.566668,
            "lat": 53.900002
        }
    }
]

function buildCityList() {
    for (let i = 0; i < cityList.length; i++) {
        let cityListItem = document.createElement('option');
        cityListItem.setAttribute('value', cityList[i].name)
        cityListItem.textContent = cityList[i].name;
        document.getElementById('countries').appendChild(cityListItem);
    }

    

}
buildCityList();
document.querySelector('#countries').onchange = selectCityChange;



function selectCityChange() {
    let city = document.querySelector('#countries').value;
    console.log(city);
}
   

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=minsk&appid=14d67f93a50fe7d556154b3fc36dba07`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector('.package-name').textContent = data.name;
                document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
                document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                document.querySelector('.wind').innerHTML = `${data.wind.speed} m/s`;


            })
            .catch(function () {

            });
        
    
    

    