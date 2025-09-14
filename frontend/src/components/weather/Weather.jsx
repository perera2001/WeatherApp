import React, { useEffect, useState } from "react";
import "./weather.css";
import cities from "./cities.json";

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Retrieve cached data if not expired
function getCached(id) {
  const key = `weather_${id}`;
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const parsed = JSON.parse(cached);
  if (Date.now() - parsed.timestamp < CACHE_TTL) {
    return parsed.data;
  }

  localStorage.removeItem(key);
  return null;
}

// Save data to cache
function setCached(id, data) {
  const key = `weather_${id}`;
  localStorage.setItem(
    key,
    JSON.stringify({ timestamp: Date.now(), data })
  );
}

export default function Weather() {
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_ID;

  useEffect(() => {
    async function fetchWeather() {
      if (!apiKey) {
        console.error(
          "API key missing. Define REACT_APP_ID in .env at project root."
        );
        setLoading(false);
        return;
      }

      const promises = cities.List.map(async (city) => {
        const id = city.CityCode;
        const cached = getCached(id);

        if (cached) {
          return { ...city, data: cached, fromCache: true };
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`;

        try {
          const res = await fetch(url);
          const data = await res.json();

          if (res.ok) {
            setCached(id, data);
            return { ...city, data, fromCache: false };
          } else {
            return { ...city, error: true, message: data.message };
          }
        } catch (err) {
          return { ...city, error: true, message: err.message };
        }
      });

      const results = await Promise.all(promises);
      setWeatherList(results);
      setLoading(false);
    }

    fetchWeather();
  }, [apiKey]);

  return (
    <div className="weather-app">
      <h2>Weather Information</h2>
      {loading && <p>Loading...</p>}

      <div className="weather-grid">
        {weatherList.map((w) => {
          if (w.error) {
            return (
              <div key={w.CityCode} className="card error">
                <h3>{w.CityName}</h3>
                <p>Error: {w.message}</p>
              </div>
            );
          }

          if (!w.data) return null;

          return (
            <div key={w.CityCode} className="card">
              <h3>{w.data.name}</h3>
              <p className="desc">
                {w.data.weather?.[0]?.description || "N/A"}
              </p>
              <p className="temp">
                {w.data.main ? Math.round(w.data.main.temp) : "N/A"} °C
              </p>
              <small>{w.fromCache ? "cached" : "live"}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
