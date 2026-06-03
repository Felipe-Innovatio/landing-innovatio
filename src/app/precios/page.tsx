import { Metadata } from "next";
import PreciosPage from "./PreciosPage";

export const metadata: Metadata = {
  title: "Precios",
  description: "Precios transparentes de desarrollo web, ciberseguridad e inteligencia artificial. Desde $800.000 CLP. Cotiza tu proyecto sin compromiso.",
  keywords: "precio desarrollo web Chile, cotizar página web, costo aplicación web Chile",
};

export default function Page() {
  return <PreciosPage />;
}
