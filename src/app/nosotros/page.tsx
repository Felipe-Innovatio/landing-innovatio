import { Metadata } from "next";
import NosotrosPage from "./NosotrosPage";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Somos ingenieros informáticos chilenos especializados en desarrollo de software, ciberseguridad e inteligencia artificial. Código real, sin plantillas.",
  keywords: "equipo ingenieros informáticos Chile, desarrollo software Santiago",
};

export default function Page() {
  return <NosotrosPage />;
}
