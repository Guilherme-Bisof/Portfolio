import { Instrument_Serif, Manrope } from "next/font/google";
import "./styles/psychologist-demo.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  title: "Dra. Helena Martins | Psicologia Clínica",
  description: "Um espaço para respirar, se compreender e seguir com mais clareza.",
};

export default function PsychologistDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} ${instrumentSerif.variable} font-sans psicologo-demo`}>
      {children}
    </div>
  );
}
