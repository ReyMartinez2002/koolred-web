import React from 'react';
import { ShieldCheck, Award, Factory, Lock } from 'lucide-react';

export function TestimoniosGrid() {
  return (
    <section id="garantias" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Respaldo Institucional</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Seguridad y Cumplimiento Normativo.</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            No dejamos la continuidad de su negocio al azar. Cada proyecto es auditado, certificado y protegido por pólizas de cumplimiento real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center mb-6 text-emerald-500">
              <ShieldCheck size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Norma NTC 2050 / RETIE</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Toda adecuación eléctrica, desde tableros hasta subestaciones, cumple estrictamente con el Reglamento Técnico de Instalaciones Eléctricas de Colombia.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center mb-6 text-red-500">
              <Award size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Pólizas y Seguros</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trabajamos con pólizas de Responsabilidad Civil Extracontractual (RCE), Cumplimiento y Calidad. Su inversión y activos están respaldados.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center mb-6 text-blue-500">
              <Lock size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Seguridad IT / OT</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              En redes y CCTV, implementamos protocolos de encriptación y segregación de redes para proteger sus sistemas operativos de amenazas externas.
            </p>
          </div>

        </div>

        {/* Cintas de marcas / Partners (Opcional, demostrativo) */}
        <div className="mt-20 pt-10 border-t border-slate-800/50 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-8">Tecnologías y Estándares que utilizamos</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-xl font-bold text-slate-300 flex items-center gap-2"><Factory size={24}/> Schneider Electric</div>
             <div className="text-xl font-bold text-slate-300 flex items-center gap-2"><Factory size={24}/> n8n</div>
             <div className="text-xl font-bold text-slate-300 flex items-center gap-2"><Factory size={24}/> Hikvision</div>
             <div className="text-xl font-bold text-slate-300 flex items-center gap-2"><Factory size={24}/> Cisco</div>
          </div>
        </div>

      </div>
    </section>
  );
}
