// lib/types.ts
export interface DashboardData {
  title: string;
  value: string;
  interval: string;
  trend: "up" | "down";
  data: number[];
}

export interface DolarData {
  id: string;
  label: string;
  showMark: boolean;
  curve: string;
  stack: string;
  area: boolean;
  stackOrder: string;
  data: number[];
}

export interface Feriado {
  fecha: string;
  tipo: string;
  nombre: string;
}

export interface TreeViewBaseItem {
  id: string;
  label: string;
  children?: TreeViewBaseItem[];
}

export interface CountryData {
  name: string;
  value: number;
  flag: JSX.Element;
  color: string;
}

export interface CotizacionData {
  label: string;
  value: number;
}

export interface PieCenterLabelProps {
  primaryText: string;
  secondaryText: string;
}

export interface WeatherData {
  name: string;
  temp: number;
  description: string;
}

export type StatCardProps = {
  title: string;
  value: string;
  interval: string;
  trend: "up" | "down" | "neutral";
  data: number[];
};

export interface StyledTextProps {
  variant: "primary" | "secondary";
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
