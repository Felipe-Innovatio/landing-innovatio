import { Metadata } from "next";
import ContactoPage from "./ContactoPage";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Innovatio-IT para desarrollo de software, ciberseguridad o inteligencia artificial. Respondemos en menos de 24 horas.",
  keywords: "contacto desarrollo software Chile, cotizar proyecto tecnologico",
};

export default function Page() {
  return <ContactoPage />;
}
