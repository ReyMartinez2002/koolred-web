import React from 'react';

const servicios = [
  {
    id: "ia",
    title: "Automatizacin Digital e IA (n8n)",
    desc: "Orquestacin de procesos, lectura de correos, clasificacin de tickets y automatizacin de operaciones sin friccin.",
    tags: ["RPA", "n8n", "Inteligencia Artificial", "Flujos"]
  },
  {
    id: "energia",
    title: "Adecuaciones Elctricas",
    desc: "Intervenciones en tableros, canalizaciones y puesta a tierra con estricto cumplimiento NTC 2050 y norma RETIE.",
    tags: ["NTC 2050", "RETIE", "Tableros", "Tensin"]
  },
  {
    id: "hvac",
    title: "Climatizacin HVAC / BMS",
    desc: "Sistemas de ventilacin, aire acondicionado y control centralizado para continuidad trmica y eficiencia energtica.",
    tags: ["BMS", "Termodinmica", "Control", "A/C"]
  },
  {
    id: "cctv",
    title: "CCTV y Seguridad Electrnica",
    desc: "Vigilancia perimetral, control de accesos y monitoreo avanzado con analtica de video y almacenamiento en nube.",
    tags: ["Seguridad", "Biometra", "IP", "Monitoreo"]
  },
  {
    id: "redes",
    title: "Cableado Estructurado",
    desc: "Diseño e instalacin de redes de datos certificadas, fibra ptica y adecuacin de data centers.",
    tags: ["Fibra ptica", "Data Center", "Certificacin", "Redes"]
  },
  {
    id: "mantenimiento",
    title: "Soporte y Mantenimiento",
    desc: "Planes preventivos y correctivos para infraestructura electromecnica, asegurando uptime y respaldo 24/7.",
    tags: ["Uptime", "Preventivo", "Soporte", "SLA"]
  }
];

export function ServiciosGrid() {
  return (
    <section id="servicios" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Nuestras Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Ingeniera que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">impulsa</span> tu operacin.</h3>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            Desde la estabilizacin de energa y control climtico, hasta la automatizacin de flujos con Inteligencia Artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((srv) => (
            <div key={srv.id} className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h4 className="text-2xl font-bold text-white mb-3">{srv.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-6">{srv.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {srv.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




