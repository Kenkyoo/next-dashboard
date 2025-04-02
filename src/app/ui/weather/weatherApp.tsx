import WeatherCard from "./weatherCard";
import { Suspense } from "react";
import { getWeather } from "@/app/lib/data";
import { useClientLocation } from "@/app/lib/utils";

export default async function Weather() {
  const { coords, error } = useClientLocation();

  if (error) return <div>{error}</div>;
  if (!coords) return <div>Obteniendo ubicación...</div>;

  const dataPromise = getWeather(coords.latitude, coords.longitude);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherCard dataPromise={dataPromise} />
    </Suspense>
  );
}
