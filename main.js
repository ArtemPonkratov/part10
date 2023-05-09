fetch("https://api.openweathermap.org/data/2.5/weather?lat=54.715424&lon=20.509207&appid=297f8f040348081f8f322643e294270d")
.then(function(kalin){return kalin.json()})
.then(function(data){
    console.log(data);
    
    document.querySelector(".speed").textContent = data.wind.speed;
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".name").textContent = data.name;
    let time = new Date(data.sys.sunrise * 1000);
    document.querySelector(".sunrise").textContent = time;
    let time1 = new Date(data.sys.sunset *1000).toLocaleTimeString();
    document.querySelector(".sunset").textContent = time1;
})