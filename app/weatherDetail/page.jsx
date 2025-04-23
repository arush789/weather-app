"use client";

import { useSearchParams } from "next/navigation";

export default function WeatherDetail() {
    const searchParams = useSearchParams();

    const city = searchParams.get("city");
    const country = searchParams.get("country");
    const temperature = searchParams.get("temperature");
    const description = searchParams.get("description");
    const icon = searchParams.get("icon");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 px-6 py-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-blue-900 mb-2">
                    {city}, {country}
                </h1>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
                    alt="weather icon"
                    className="mx-auto w-32 h-32 my-4"
                />
                <p className="text-4xl font-semibold text-blue-700">{temperature}°C</p>
                <p className="text-gray-600 mt-2 text-lg capitalize">{description}</p>
            </div>
        </div>
    );
}
