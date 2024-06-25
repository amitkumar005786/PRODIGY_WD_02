let input = document.getElementById("input");
let city = document.getElementById("city");
let wind = document.getElementById("wind");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");



const API_key = "4b93e19ab52fcb74f0502165db2b9563";

let featchdata = async function (search) {
    // console.log(search);
    const getdata = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${"4b93e19ab52fcb74f0502165db2b9563"}&units=metric`
    );
    console.log(getdata);
    // console.log(search);

    let jsonformat = await getdata.json();
    console.log(jsonformat);
    console.log(city.innerHTML = jsonformat.name);
    console.log(jsonformat.main.temp);
    console.log(wind.innerHTML = jsonformat.wind.speed);
    console.log(jsonformat.main.humidity);

    city.innerHTML = jsonformat.name;
    temp.innerHTML = jsonformat.main.temp + "°C";
    wind.innerHTML = jsonformat.wind.speed + "km/h";

    humidity.innerHTML = jsonformat.main.humidity + "%";

}


// featchdata(patna);

function myfunction() {
    let search = input.value;
    // console.log(search);
    featchdata(search);
}