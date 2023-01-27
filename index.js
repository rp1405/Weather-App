let weather = {
    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=70452939973ff199af1b8d089b3bff07")
        .then((response) => {
          if (!response.ok) {
            alert("Error");
            throw new Error("Error");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { temp} = data.main;
      const {icon,description}=data.weather[0];
      document.querySelector(".nameofcity").innerText =name;
      document.querySelector(".temperature_value").innerText = temp + "°C";
      document.querySelector(".icon").display="block";
      document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".sky").innerText=description;
    },
    search: function () {
      this.fetchWeather(document.querySelector(".city").value);
    },
  };
  document.querySelector(".btn").addEventListener("click", function () {
    weather.search();
  });
  document.querySelector(".city").addEventListener("keyup" ,function(event){
    if(event.key=="Enter"){
        weather.search();
    }
  });