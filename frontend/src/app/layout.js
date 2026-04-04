import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

export const metadata = {
  title: "Portifólio | Guilherme Bisof",
  description: "Portifólio de desenvolvimento de Guilherme Bisof"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${robotoMono.className} bg-black overflow-y-auto no-scrollbar`} suppressHydrationWarning={true}>
        <AuthProvider>
          <Navbar />
          {/* Esta div é o container do conteúdo principal */}
          {/* ml-64: Margem à esquerda de 256px (a mesma largura da sidebar) */}
          <div className="ml-64">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
