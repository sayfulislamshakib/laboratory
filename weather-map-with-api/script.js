const button = document.getElementById("search");
const inputValue = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const descreption = document.getElementById("weather-description");
const icon = document.getElementById("icon");
const show = document.getElementById("show");

button.addEventListener("click", function () {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			inputValue.value +
			"&APPID=fa3b77be93b8daed933db528de371a83"
	)
		.then((res) => res.json())
		.then((data) => {
			const name = data.name;
			const temperature = data.main.temp;
			const temperatureDeg = (temperature - 273.15).toFixed(2);
			const desc = data.weather[0].main;
			const iconValue = data.weather[0].icon;
			cityName.innerText = name;
			temp.innerText = temperatureDeg;
			descreption.innerText = desc;
			icon.setAttribute(
				"src",
				`https://openweathermap.org/img/w/${iconValue}.png`
			);
			show.style.display = "inline";
		})
		.catch((err) => alert(err));
});
