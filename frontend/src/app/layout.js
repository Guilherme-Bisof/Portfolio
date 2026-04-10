import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

export const metadata = {
  title: "Portifólio | Guilherme Bisof",
  description: "Portifólio de desenvolvimento de Guilherme Bisof"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${robotoMono.className} bg-black overflow-y-auto no-scrollbar`} suppressHydrationWarning={true}>
        <AuthProvider>
          <Navbar />
          {}
          {}
          <div className="md:ml-64">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
