import Navbar from "@/components/layout/Navbar";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 w-full">{children}</main>
    </>
  );
}
