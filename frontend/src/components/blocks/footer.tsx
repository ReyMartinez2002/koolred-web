import React from 'react';


export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
             <img src="/assets/LOGO .png" alt="KoolRed Logo" className="h-10 opacity-90" onError={(e) => e.currentTarget.style.display='none'} />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Expertos en adecuaciones eléctricas, automatización IA, climatización HVAC y cableado estructurado. Ingeniería de continuidad operativa para grandes empresas en Colombia.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all">
              in
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all">
              ig
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all">
              
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all">
              yt
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Servicios Especializados</h3>
          <ul className="space-y-3">
            <li><a href="#servicios" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Adecuaciones Eléctricas</a></li>
            <li><a href="#servicios" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Climatización HVAC</a></li>
            <li><a href="#servicios" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Seguridad Electrónica</a></li>
            <li><a href="#servicios" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Automatización n8n / IA</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Garantías y Legal</h3>
          <ul className="space-y-3">
            <li><a href="#garantias" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Norma NTC 2050 / RETIE</a></li>
            <li><a href="#garantias" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Pólizas de Cumplimiento</a></li>
            <li><a href="#" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="text-slate-400 text-sm hover:text-red-500 transition-colors">Tratamiento de Datos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Contacto Directo</h3>
          <p className="text-slate-400 text-sm mb-3 font-mono flex items-center gap-2">contacto@koolredsoluciones.com</p>
          <p className="text-slate-400 text-sm mb-3 font-mono flex items-center gap-2">+57 315 494 0908</p>
          <p className="text-slate-400 text-sm mb-3">Bogotá D.C, Colombia</p>
          <div className="mt-6 px-4 py-2 bg-slate-900 border border-emerald-500/20 rounded text-emerald-500 text-xs font-bold inline-block animate-pulse">
            SOPORTE 24/7 ACTIVO
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs uppercase tracking-widest font-semibold">
          &copy; {new Date().getFullYear()} KoolRed Soluciones. Todos los derechos reservados.
        </p>
        <p className="text-slate-700 text-xs font-mono">Powered by Ingeniería Colombiana.</p>
      </div>
    </footer>
  );
}
