import React from "react";

interface SectionCardProps {
  title: string;
  children: React.ReactNode; 
}

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="bg-gray-900/50 rounded-lg p-6 w-full max-w-4xl mb-8 border border-cyan-400/30 shadow-[0_0_10px_rgba(0,255,255,0.1)]">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">{title}</h2>
      <div className="text-gray-300 space-y-4">{children}</div>
    </section>
  );
}
