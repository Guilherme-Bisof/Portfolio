import React from "react";

export const metadata = {
  title: "Demos | Guilherme Bisof",
  description: "Demonstrações de sites comerciais.",
  robots: {
    index: true,
    follow: true,
  }
};

export default function DemosLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-white font-sans text-neutral-900">
      {/* Demo Content */}
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
