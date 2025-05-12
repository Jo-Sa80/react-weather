import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function showConditions(response) {
    let temperature = Math.round(response.data.temperature.current);
    let condition = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let wind = Math.round(response.data.wind.speed);

    let icon = response.data.condition.icon_url;

    setMessage(
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {condition}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
        <br />
        <img src={icon} alt={condition} />
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(showConditions);
  }

  function getCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a City..." onChange={getCity} />
        <input type="submit" value="search" />
      </form>

      <div> {message} </div>
    </div>
  );
}
