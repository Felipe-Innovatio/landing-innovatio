export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  href: string;
}

export const services: ServiceItem[] = [
  {
    title: "Desarrollo web y apps",
    description:
      "Sitios, portales y aplicaciones a medida, con el código en un repositorio del cliente.",
    price: "desde $800.000",
    href: "/servicios/desarrollo",
  },
  {
    title: "Ciberseguridad",
    description:
      "Revisión de configuraciones, dependencias y accesos, con informe ordenado por riesgo.",
    price: "a cotizar",
    href: "/servicios/ciberseguridad",
  },
  {
    title: "Inteligencia artificial",
    description:
      "Automatización de tareas repetitivas con modelos de lenguaje, integrada a los sistemas existentes.",
    price: "a cotizar",
    href: "/servicios/ia",
  },
  {
    title: "Cloud y hosting",
    description:
      "Administración de servidores, despliegues, respaldos y monitoreo.",
    price: "desde $150.000/mes",
    href: "/servicios/hosting",
  },
  {
    title: "Consultoría",
    description:
      "Revisión de arquitectura, costos de nube y deuda técnica.",
    price: "desde $200.000",
    href: "/servicios/consultoria",
  },
];
