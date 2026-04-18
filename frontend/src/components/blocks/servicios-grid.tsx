import React from 'react';

const servicios = [
  {
    id: "ia",
    title: "Automatización Industrial e IA",
    desc: "Orquestación de procesos, PLCs, lectura de correos, clasificación de tickets y automatización de operaciones industriales con n8n.",
    tags: ["RPA", "n8n", "Industrial", "Flujos"]
  },
  {
    id: "energia",
    title: "Adecuaciones Eléctricas (RETIE)",
    desc: "Intervenciones en tableros, canalizaciones y puesta a tierra con estricto cumplimiento NTC 2050 y norma RETIE.",
    tags: ["NTC 2050", "RETIE", "Tableros", "Tensión"]
  },
  {
    id: "ev",
    title: "Electromovilidad (Cargadores EV)",
    desc: "Instalación certificada y adecuación de potencia para estaciones de carga de vehículos eléctricos residenciales y comerciales.",
    tags: ["Electromovilidad", "EV", "Cargadores", "Sostenibilidad"]
  },
  {
    id: "hvac",
    title: "Climatización y Mantenimiento HVAC",
    desc: "Sistemas de ventilación, instalación y mantenimiento profundo de aires acondicionados para continuidad térmica.",
    tags: ["BMS", "Mantenimiento", "A/C", "Termodinámica"]
  },
  {
    id: "pc",
    title: "Soporte IT y Mantenimiento PC",
    desc: "Mantenimiento preventivo/correctivo de computadores, redes corporativas y estaciones de trabajo para alto rendimiento.",
    tags: ["Soporte IT", "Hardware", "Mantenimiento", "HelpDesk"]
  },
  {
    id: "cctv",
    title: "CCTV y Seguridad Electrónica",
    desc: "Vigilancia perimetral, control de accesos y monitoreo avanzado con analítica de video y almacenamiento en nube.",
    tags: ["Seguridad", "Biometría", "IP", "Monitoreo"]
  },
  {
    id: "redes",
    title: "Cableado Estructurado",
    desc: "Diseño e instalación de redes de datos certificadas, fibra óptica y adecuación de data centers.",
    tags: ["Fibra Óptica", "Data Center", "Certificación", "Redes"]
  },
  {
    id: "mantenimiento",
    title: "Soporte de Infraestructura 24/7",
    desc: "Planes preventivos y correctivos para infraestructura electromecánica, asegurando uptime y respaldo continuo.",
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
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Ingeniería que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">impulsa</span> tu operación.</h3>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            Desde la estabilización de energía, cargadores EV y control climático, hasta la automatización industrial y soporte IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((srv) => (
            <div key={srv.id} className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h4 className="text-xl font-bold text-white mb-3">{srv.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm flex-grow">{srv.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {srv.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-slate-800 text-slate-300 border border-slate-700">
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
