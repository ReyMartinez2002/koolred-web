import React from 'react';

export function ProcesoGrid() {
  return (
    <section id="proceso" className="py-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black border-t border-slate-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Metodologa KoolRed</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ruta clara y verificable.</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Aseguramos la calidad operativa desde la evaluacin inicial hasta el soporte a largo plazo, bajo estndares industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:animate-pulse" />
            <div className="relative p-8 glass-panel rounded-2xl ring-1 ring-white/10 flex flex-col h-full transform transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 text-red-500 font-bold text-xl border border-red-500/20">
                1
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Descubrimiento</h4>
              <p className="text-slate-400 text-sm">
                Identificamos las necesidades reales de tu infraestructura o procesos, priorizando reas crticas.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:animate-pulse" />
            <div className="relative p-8 glass-panel rounded-2xl ring-1 ring-white/10 flex flex-col h-full transform transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 text-blue-500 font-bold text-xl border border-blue-500/20">
                2
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Diseño y Propuesta</h4>
              <p className="text-slate-400 text-sm">
                Arquitectura de la solucin con planos, flujogramas de IA o normativas elctricas (NTC 2050).
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:animate-pulse" />
            <div className="relative p-8 glass-panel rounded-2xl ring-1 ring-white/10 flex flex-col h-full transform transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 text-emerald-500 font-bold text-xl border border-emerald-500/20">
                3
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Ejecucin</h4>
              <p className="text-slate-400 text-sm">
                Despliegue tcnico certificado, instalacin de tableros, cableado o automatizaciones sin interrupcin operativa.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:animate-pulse" />
            <div className="relative p-8 glass-panel rounded-2xl ring-1 ring-white/10 flex flex-col h-full transform transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 text-purple-500 font-bold text-xl border border-purple-500/20">
                4
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Entregables y SLA</h4>
              <p className="text-slate-400 text-sm">
                Planos as-built, documentacin de flujos n8n y plizas de soporte 24/7 para continuidad del negocio.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





