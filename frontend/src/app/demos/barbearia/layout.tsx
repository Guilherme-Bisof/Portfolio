import { Inter, Outfit, Instrument_Serif } from "next/font/google";
import "./styles/barbershop-demo.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  title: "Lumina | Barbearia Premium Contemporânea",
  description: "Seu tempo respeitado. Seu estilo alinhado. Muito além do corte.",
};

export default function BarbeariaDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${outfit.variable} ${instrumentSerif.variable} font-sans`}>
      {children}
    </div>
  );
}
