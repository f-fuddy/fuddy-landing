import { BsInstagram, BsLinkedin } from "react-icons/bs";

export const APP_URL = "http://localhost:3000";

export const sections = [
  {
    name: "¿Por qué Fuddy",
    href: "#por-qué-fuddy",
  },
  {
    name: "¿Cómo funciona?",
    href: "#pasos",
  },
  {
    name: "Nutrición en Latam",
    href: "#nutrición",
  },
];

export const routes = [
  {
    name: "Nosotros",
    href: `${APP_URL}/about`,
  },
  {
    name: "Recetas",
    href: `${APP_URL}/dashboard`,
  },
  {
    name: "Ayuda",
    href: `${APP_URL}/help`,
  },
];

export const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/familia.fuddy/",
    Icon: BsInstagram,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/fuddyapp/",
    Icon: BsLinkedin,
  },
];
