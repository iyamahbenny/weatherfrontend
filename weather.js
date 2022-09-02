const apiCall = async (place) => {
  const urlParams = new URLSearchParams(window.location.search);
  const user = urlParams.get("user");
  if (user) {
    document.getElementById("loginhref").innerHTML = `Hello ${user}`;
    document.getElementById("loginhref").setAttribute("href", "#");
  } else {
    document.getElementById("loginhref").innerHTML = "Login";
    document.getElementById("loginhref").setAttribute("href", "login.html");
  }

  if (!place) place = "Benin City";
  let weatherData = await fetch(
    `http://api.weatherstack.com/current?access_key=cfbd3608140ec073dd81b4876426dbbc&query=${place}`
  )
    .then((res) => res.json())
    .then((data) => changeDom(data))
    .catch(
      (error) => (document.getElementById("popup").style.display = "grid")
    );
};

const changeDom = (data) => {
  console.log(data);
  document.getElementById("Domlocation").innerHTML = data.location.name;
  document.getElementById("Domtemp").innerHTML = data.current.temperature;
  document.getElementById("Domdate").innerHTML = data.location.localtime;
  document.getElementById("Domweather").innerHTML =
    data.current.weather_descriptions[0];
  document
    .getElementById("imgsrc")
    .setAttribute("src", data.current.weather_icons[0]);
  document.getElementById("cloudy").innerHTML = data.current.cloudcover;
  document.getElementById("humidity").innerHTML = data.current.humidity;
  document.getElementById("speed").innerHTML = data.current.wind_speed;
  document.getElementById("pressure").innerHTML = data.current.pressure;
  if (
    data.current.weather_descriptions[0].toLowerCase().includes("rain") ||
    data.current.weather_descriptions[0].toLowerCase().includes("drizzle") ||
    data.current.weather_descriptions[0].toLowerCase().includes("thunderstorm")
  ) {
    document.getElementById("maindiv").style.backgroundImage =
      'url("photo-1534274988757-a28bf1a57c17.jpeg")';
    document.getElementById("searchicon").style.backgroundColor =
      "rgb(2, 67, 67)";
  } else if (
    data.current.weather_descriptions[0].toLowerCase().includes("sun")
  ) {
    document.getElementById("maindiv").style.backgroundImage =
      'url("istockphoto-1157189649-612x612.jpg")';
    document.getElementById("searchicon").style.backgroundColor =
      "rgb(154, 233, 233)";
  } else if (
    data.current.weather_descriptions[0].toLowerCase().includes("fog") ||
    data.current.weather_descriptions[0].toLowerCase().includes("mist") ||
    data.current.weather_descriptions[0].toLowerCase().includes("haz")
  ) {
    document.getElementById("maindiv").style.backgroundImage =
      'url("foggy.jpg")';
    document.getElementById("searchicon").style.backgroundColor =
      "rgb(78, 89, 83)";
  } else if (
    data.current.weather_descriptions[0].toLowerCase().includes("clear")
  ) {
    document.getElementById("maindiv").style.backgroundImage =
      'url("clearsky.jpg")';
    document.getElementById("searchicon").style.backgroundColor =
      "rgb(154, 233, 233)";
  } else {
    document.getElementById("maindiv").style.backgroundImage =
      'url("cloudy.avif")';
    document.getElementById("searchicon").style.backgroundColor =
      "rgb(210,97,16)";
  }
};

document.getElementById("searchicon").addEventListener("click", () => {
  const check = document.getElementById("input").value;
  if (check) apiCall(check);
});

apiCall();
