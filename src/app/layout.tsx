import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer, Navbar } from "@/components";
import Providers from "./Providers";

interface Props {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const image =
  "https://res.cloudinary.com/draig/image/upload/v1702086792/fuddy/fpxgbfolktuj2le7u4sf.png";
export const metadata = {
  title: "Fuddy | Nutrición y eco-sustentabilidad ",
  description:
    "Nutrición, ambiente y sustentabilidad, en busca de una comunidad nutricionalmente educada y ambientalmente cosciente",
  keywords: [
    "Alimentación saludable",
    "Nutrición equilibrada",
    "Comida sana",
    "Dietas balanceadas",
    "Alimentos naturales",
    "Alimentación consciente",
    "Comer bien",
    "Recetas saludables",
    "Eco-friendly",
    "Sostenibilidad alimentaria",
    "Productos orgánicos",
    "Comida sin pesticidas",
    "Alimentos frescos",
    "Planificación de comidas",
    "Dietas vegetarianas",
    "Dietas veganas",
    "Dieta mediterránea",
    "Alimentación y salud",
    "Superalimentos",
    "Reducción de desperdicio de alimentos",
    "Alimentos frescos y locales",
    "Comer de manera responsable",
    "Nutrientes esenciales",
    "Alimentos sin gluten",
    "Alimentación basada en plantas",
    "Alimentos sin lactosa",
    "Dieta sin azúcar",
    "Planificación de menús",
    "Alimentos ricos en fibra",
    "Alimentos ricos en antioxidantes",
  ],
  ogImage: image,
  images: [
    {
      url: image,
      width: 800,
      height: 600,
      alt: "Fuddy app",
      name: "Fuddy app",
    },
    {
      url: image,
      width: 1800,
      height: 1600,
      alt: "Fuddy app",
      name: "Fuddy app",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Fuddy app",
    description:
      "Nutrición, ambiente y sustentabilidad, en busca de una comunidad nutricionalmente educada y ambientalmente cosciente",
    images: [image],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    images: image,
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <link rel="canonical" href="https://www.fuddy.click" />
      <body className={`${poppins.variable} font-poppins`}>
        <Navbar />
        <Providers>
          <main>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
