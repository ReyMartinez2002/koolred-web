import React from 'react';

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-700 via-red-600 to-red-800 border-y border-red-500/30 relative overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.2)]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-multiply" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-red-500/50">
          
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">+10</span>
            <span className="text-red-100 text-sm md:text-base font-medium uppercase tracking-wider">Años de Experiencia</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">100%</span>
            <span className="text-red-100 text-sm md:text-base font-medium uppercase tracking-wider">Cumplimiento RETIE</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">+50</span>
            <span className="text-red-100 text-sm md:text-base font-medium uppercase tracking-wider">Proyectos Entregados</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl md:text-5xl font-black text-white mb-2">24/7</span>
            <span className="text-red-100 text-sm md:text-base font-medium uppercase tracking-wider">Soporte Operativo</span>
          </div>

        </div>
      </div>
    </section>
  );
}





