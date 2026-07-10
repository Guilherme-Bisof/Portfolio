import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Portifólio | Guilherme Bisof",
  description: "Portifólio de desenvolvimento de Guilherme Bisof",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-slate-300 min-h-screen flex flex-col">
        <AuthProvider>
          <Navbar />

          <main className="flex-grow pt-24 w-full">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
