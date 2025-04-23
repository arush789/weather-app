"use client";

import { useEffect, useState } from "react";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);

  useEffect(() => {
    fetch("https://weather-app-server-beta.vercel.app/api/weather")
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, []);

  const handleCardClick = (weather) => {
    setSelectedWeather(weather);
  };

  const closeDetail = () => {
    setSelectedWeather(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
        Weather Dashboard
      </h1>

      {/* Main Grid */}
      {!selectedWeather ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {weatherData.map((weather) => (
            <div
              key={weather._id}
              onClick={() => handleCardClick(weather)}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {weather.city}, {weather.country}
              </h2>
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weather icon"
                className="w-20 h-20 my-2"
              />
              <p className="text-lg text-blue-700 font-bold">
                {weather.temperature}°C
              </p>
              <p className="text-gray-600 capitalize">{weather.description}</p>
            </div>
          ))}
        </div>
      ) : (
        // Detail View
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              {selectedWeather.city}, {selectedWeather.country}
            </h1>
            <img
              src={`http://openweathermap.org/img/wn/${selectedWeather.icon}@4x.png`}
              alt="weather icon"
              className="mx-auto w-32 h-32 my-4"
            />
            <p className="text-4xl font-semibold text-blue-700">
              {selectedWeather.temperature}°C
            </p>
            <p className="text-gray-600 mt-2 text-lg capitalize">
              {selectedWeather.description}
            </p>
            <button
              onClick={closeDetail}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
