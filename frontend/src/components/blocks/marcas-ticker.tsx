import React from 'react';

const marcas = [
  { name: "Schneider Electric", logo: "Schneider" },
  { name: "Cisco Systems", logo: "Cisco" },
  { name: "Hikvision", logo: "Hikvision" },
  { name: "n8n", logo: "n8n" },
  { name: "Fluke Networks", logo: "Fluke" },
  { name: "Siemens", logo: "Siemens" },
  { name: "Legrand", logo: "Legrand" },
  { name: "ABB", logo: "ABB" },
  { name: "OpenAI", logo: "OpenAI" },
  { name: "Dahua", logo: "Dahua" }
];

export function MarcasTicker() {
  return (
    <section className="py-12 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          Ingeniería soportada por marcas líderes mundiales
        </p>
      </div>
      
      {/* Carrusel Infinito */}
      <div className="relative w-full flex items-center h-20">
        
        {/* Degradados laterales para ocultar la entrada/salida */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

        {/* Pista de Animación (Ancho Doble para el loop) */}
        <div className="flex gap-16 md:gap-24 absolute left-0 animate-scroll w-[200%]">
          
          {/* Primer Bloque de Marcas */}
          {marcas.map((marca, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
              <span className="text-2xl md:text-3xl font-black text-slate-300 tracking-tighter whitespace-nowrap font-sans">
                {marca.logo}
              </span>
            </div>
          ))}

          {/* Segundo Bloque Clonado (Para la ilusión de infinito) */}
          {marcas.map((marca, idx) => (
            <div key={idx + 100} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
              <span className="text-2xl md:text-3xl font-black text-slate-300 tracking-tighter whitespace-nowrap font-sans">
                {marca.logo}
              </span>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
