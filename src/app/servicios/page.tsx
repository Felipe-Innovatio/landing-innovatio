import { Metadata } from "next";
import ServiciosPage from "./ServiciosPage";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Desarrollo web, ciberseguridad, hosting en la nube, consultoría tecnológica e inteligencia artificial. Soluciones a medida para empresas chilenas.",
  keywords: "desarrollo web Chile, ciberseguridad empresas, hosting cloud, consultoría tecnológica, inteligencia artificial Chile",
};

export default function Page() {
  return <ServiciosPage />;
}
