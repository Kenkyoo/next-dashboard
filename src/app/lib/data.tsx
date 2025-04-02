import {
  DashboardData,
  DolarData,
  Feriado,
  CountryData,
  CotizacionData,
  meses,
} from "./types";
import { getLast12Months, getRandomColor } from "./utils";
import { TreeViewBaseItem } from "@mui/x-tree-view/models";
import {
  UsaFlag,
  EuroFlag,
  BrazilFlag,
  ChileFlag,
  UruguayFlag,
  GlobeFlag,
} from "./flags";
import { nanoid } from "nanoid";
import { useGeolocated } from "react-geolocated";

const api_url = process.env.NEXT_PUBLIC_API_URL;

async function getCountryRisk(): Promise<number[]> {
  const response = await fetch(`${api_url}/finanzas/indices/riesgo-pais`);
  const json = await response.json();

  // Simulación de valores para los últimos 30 meses
  const data = json.slice(-30).map((entry: { valor: number }) => entry.valor);

  return data;
}

async function getUVAIndex(): Promise<number[]> {
  const response = await fetch(`${api_url}/finanzas/indices/uva`);
  const json = await response.json();

  // Simulación de valores para los últimos 30 meses
  const data = json.slice(-30).map((entry: { valor: number }) => entry.valor);

  return data;
}

async function getInflation(): Promise<number[]> {
  const response = await fetch(`${api_url}/finanzas/indices/inflacion`);
  const json = await response.json();

  // Simulación de valores para los últimos 30 meses
  const data = json.slice(-30).map((entry: { valor: number }) => entry.valor);

  return data;
}

export async function getRatesData(): Promise<DashboardData[]> {
  const [countryRiskData, uvaData, inflationData] = await Promise.all([
    getCountryRisk(),
    getUVAIndex(),
    getInflation(),
  ]);

  return [
    {
      title: "Riesgo País",
      value: `${countryRiskData[countryRiskData.length - 1]}`, // Último valor
      interval: "Last 30 months",
      trend: "up",
      data: countryRiskData,
    },
    {
      title: "Índice UVA",
      value: `${uvaData[uvaData.length - 1]}`,
      interval: "Last 30 months",
      trend: "down",
      data: uvaData,
    },
    {
      title: "Índice Inflacion",
      value: `${inflationData[inflationData.length - 1]}`,
      interval: "Last 30 months",
      trend: "down",
      data: inflationData,
    },
  ];
}

const dolarOficial = "oficial";
const dolarBlue = "blue";
const dolarBolsa = "bolsa";

async function getOficialDolar(): Promise<number[]> {
  const response = await fetch(
    `${api_url}/cotizaciones/dolares/${dolarOficial}`
  );
  const json = await response.json();

  // Simulación de valores para los últimos 30 meses
  const data = json.slice(-12).map((entry: { compra: number }) => entry.compra);

  return data;
}

async function getBlueDolar(): Promise<number[]> {
  const response = await fetch(`${api_url}/cotizaciones/dolares/${dolarBlue}`);
  const json = await response.json();

  // Simulación de valores para los últimos 30 meses
  const data = json.slice(-12).map((entry: { compra: number }) => entry.compra);

  return data;
}

async function getBolsaDolar(): Promise<number[]> {
  const response = await fetch(`${api_url}/cotizaciones/dolares/${dolarBolsa}`);
  const json = await response.json();

  // Simulación de valores para los últimos 30 meses
  const data = json.slice(-12).map((entry: { compra: number }) => entry.compra);

  return data;
}

export async function getDolarData(): Promise<DolarData[]> {
  const [dolarBlueData, dolarBolsaData, dolarOficialData] = await Promise.all([
    getBolsaDolar(),
    getOficialDolar(),
    getBlueDolar(),
  ]);

  return [
    {
      id: "dolar_oficial",
      label: "Dólar Oficial",
      showMark: false,
      curve: "linear",
      stack: "total",
      area: true,
      stackOrder: "ascending",
      data: dolarOficialData,
    },
    {
      id: "dolar_blue",
      label: "Dólar Blue",
      showMark: false,
      curve: "linear",
      stack: "total",
      area: true,
      stackOrder: "ascending",
      data: dolarBlueData,
    },
    {
      id: "dolar_bolsa",
      label: "Dólar Bolsa",
      showMark: false,
      curve: "linear",
      stack: "total",
      area: true,
      stackOrder: "ascending",
      data: dolarBolsaData,
    },
  ];
}

export async function getInflationMonth(): Promise<{
  data: number[];
  last12Months: string[];
}> {
  const response = await fetch(`${api_url}/finanzas/indices/inflacion`);
  const json = await response.json();

  const data = json.slice(-30).map((entry: { valor: number }) => entry.valor);
  const last12Months = getLast12Months();

  return { data, last12Months };
}

// 📌 Función para obtener los senadores
export async function getSenadores(): Promise<any> {
  const response = await fetch(`${api_url}/senado/senadores`);
  const json = await response.json();

  // 📌 Recortar los últimos 72 resultados
  const data = json.slice(-72).map((senador: any) => ({
    id: senador.id, // ⚠️ Obligatorio para Material UI
    nombre: senador.nombre,
    partido: senador.partido,
    provincia: senador.provincia,
    reemplazo: senador.reemplazo || "N/A",
    foto: senador.foto,
  }));

  return data;
}

export async function getFeriados(): Promise<any> {
  const response = await fetch(`${api_url}/feriados`);
  const json: Feriado[] = await response.json();

  const feriados: TreeViewBaseItem[] = meses.map((mes, index) => {
    const feriadosDelMes = json.filter((feriado) => {
      const fecha = new Date(feriado.fecha);
      return fecha.getMonth() === index;
    });

    return {
      id: `${mes}-${index}`, // ID único para el mes
      label: mes.charAt(0).toUpperCase() + mes.slice(1),
      children: feriadosDelMes.map((feriado) => ({
        id: `${feriado.fecha}-${feriado.nombre}`, // Usa la fecha para asegurar unicidad
        label: `${feriado.nombre} - ${feriado.fecha}`,
      })),
    };
  });

  return feriados;
}

export async function getQuotes(): Promise<{
  data: any[];
  countries: any[];
}> {
  // Llamada a la API para obtener las cotizaciones
  const response = await fetch("https://dolarapi.com/v1/cotizaciones");
  const json = await response.json();

  const data: CotizacionData[] = json.map(
    (cotizacion: { nombre: string; compra: number }) => ({
      label: cotizacion.nombre,
      value: cotizacion.compra,
    })
  );

  const countries: CountryData[] = json.map(
    (cotizacion: { nombre: string; compra: number; moneda: string }) => {
      let flagComponent: JSX.Element;
      switch (cotizacion.moneda) {
        case "USD":
          flagComponent = <UsaFlag />;
          break;
        case "EUR":
          flagComponent = <EuroFlag />;
          break;
        case "BRL":
          flagComponent = <BrazilFlag />;
          break;
        case "CLP":
          flagComponent = <ChileFlag />;
          break;
        case "UYU":
          flagComponent = <UruguayFlag />;
          break;
        default:
          flagComponent = <GlobeFlag />; // Un componente por defecto para otras monedas
      }

      return {
        id: nanoid(),
        name: cotizacion.nombre,
        value: cotizacion.compra,
        flag: flagComponent,
        color: getRandomColor(), // Función para generar colores aleatorios o predefinidos
      };
    }
  );

  return { data, countries };
}

export async function getWeather(lat: number, lon: number): Promise<any> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=es`
  );

  if (!response.ok)
    throw new Error("No se pudo obtener la información del clima.");

  return response.json();
}
