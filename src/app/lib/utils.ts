import { useGeolocated } from "react-geolocated";

export function getLast12Months(): string[] {
  const months: string[] = [];
  const currentDate = new Date();

  for (let i = 0; i < 12; i++) {
    const date = new Date(currentDate);
    date.setMonth(currentDate.getMonth() - i);

    const monthName = date.toLocaleString("en-US", { month: "short" });

    months.push(monthName);
  }

  return months.reverse();
}

export function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 50%, 50%)`;
}

export async function useClientLocation() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated();

  if (!isGeolocationAvailable)
    return { error: "La geolocalización no está disponible." };
  if (!isGeolocationEnabled)
    return { error: "Por favor, habilita la geolocalización." };

  return { coords, error: null };
}
