import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contacto" className="relative overflow-hidden py-32 bg-slate-950 border-t border-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">¿Listo para escalar su infraestructura?</h2>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Cuéntenos su proceso digital o sus necesidades electromecánicas. Respondemos con una ruta clara, cotización técnica y cumplimiento normativo inmediato.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://wa.me/573154940908" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 group">
            Hablar con un Ingeniero
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="mailto:contacto@koolredsoluciones.com" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-bold rounded-full transition-all border border-slate-700 hover:border-slate-500">
            contacto@koolredsoluciones.com
          </a>
        </div>
        <p className="mt-8 text-sm text-slate-500 font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
          Disponibilidad para visita técnica. Lun - Vie (8:00am - 5:30pm)
        </p>
      </div>
    </section>
  );
}
