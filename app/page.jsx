"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/weather")
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Weather Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {weatherData.map((weather) => (
            <Link
              key={weather._id}
              href={`/weatherDetail?city=${weather.city}&country=${weather.country}&temperature=${weather.temperature}&description=${weather.description}&icon=${weather.icon}`}
            >
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
