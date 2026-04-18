import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contacto" className="relative overflow-hidden py-32 bg-slate-950 border-t border-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Lado izquierdo: Textos de autoridad */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold tracking-wider mb-6 border border-emerald-500/20">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
            INGENIERA DISPONIBLE
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Escalemos la eficiencia de su <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">operacin.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Deje de perder dinero por cadas elctricas o procesos manuales. Cuntenos su necesidad; le responderemos hoy mismo con un diagnstico tcnico y ruta de ejecucin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a href="https://wa.me/573154940908" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 group">
              Hablar con un Ingeniero
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:contacto@koolredsoluciones.com" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-bold rounded-full transition-all border border-slate-700 hover:border-slate-500">
              contacto@koolredsoluciones.com
            </a>
          </div>
        </div>

        {/* Lado derecho: Tarjeta de contacto minimalista (Simula un ticket/formulario) */}
        <div className="w-full md:w-96 flex-shrink-0">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px]"></div>
             <h3 className="text-2xl font-bold text-white mb-6">Contctenos</h3>
             <div className="space-y-4">
               <div>
                 <label className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">WhatsApp Directo</label>
                 <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-white font-mono text-lg flex justify-between items-center">
                    +57 315 494 0908
                 </div>
               </div>
               <div>
                 <label className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Horario de Visitas Tcnicas</label>
                 <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-300 text-sm">
                    Lunes - Viernes<br/>
                    <span className="text-white font-bold">8:00 AM - 5:30 PM</span>
                 </div>
               </div>
               <p className="text-xs text-slate-500 text-center mt-6">Respuesta tcnica garantizada en menos de 24 horas hbiles.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}




