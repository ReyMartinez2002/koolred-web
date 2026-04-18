import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const proyectos = [
  {
    id: 1,
    title: "Automatización Industrial n8n",
    client: "Planta de Producción",
    category: "IA & RPA",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    challenge: "Alta tasa de errores manuales en la captura de datos de sensores y reportes de producción retrasados por más de 24 horas, afectando la toma de decisiones.",
    solution: "Implementación de flujos automatizados con n8n, integrando los PLCs de la planta directamente con el ERP corporativo. Se desplegó un bot de IA para clasificar alertas.",
    results: [
      "Reducción del 95% en errores de digitación.",
      "Reportes gerenciales instantáneos.",
      "Ahorro de 120 horas hombre al mes."
    ],
    tech: ["n8n", "Python API", "Modbus", "OpenAI"]
  },
  {
    id: 2,
    title: "Adecuación Eléctrica RETIE",
    client: "Centro Comercial (> 10,000 m2)",
    category: "Ingeniería Eléctrica",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    challenge: "Tableros eléctricos obsoletos con riesgo de incendio y caídas de tensión constantes que afectaban los equipos de refrigeración de los locales comerciales.",
    solution: "Rediseño completo de la infraestructura. Cambio de tableros de distribución principal, mejora de la malla de puesta a tierra y certificación bajo la estricta norma NTC 2050 y RETIE.",
    results: [
      "Certificación RETIE aprobada al 100%.",
      "Cero incidentes térmicos o cortes en 2 años.",
      "Estabilidad de tensión garantizada."
    ],
    tech: ["Schneider Electric", "Analizadores de Red", "Cobre 100%"]
  },
  {
    id: 3,
    title: "Data Center & Fibra Óptica",
    client: "Entidad del Sector Financiero",
    category: "Telecomunicaciones",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    challenge: "Latencia alta y cuellos de botella en el procesamiento de transacciones debido a un cableado estructurado antiguo (Categoría 5e) no certificado.",
    solution: "Migración de la red troncal a Fibra Óptica OM4 y actualización de los enlaces horizontales a Categoría 6A, con certificación y pruebas de reflectometría Fluke.",
    results: [
      "Ancho de banda multiplicado x10.",
      "Latencia reducida a submilisegundos.",
      "Uptime del 99.99% garantizado por 15 años."
    ],
    tech: ["Fibra Óptica OM4", "Cisco Nexus", "Fluke Networks"]
  }
];

export function ProyectosGrid() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="proyectos" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div>
            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Casos de Exito</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Nuestros Proyectos.</h3>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-md text-base md:text-right">
            Evidencia de nuestra capacidad técnica y operativa en implementaciones de alta exigencia. Haga clic para conocer a fondo cada caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.map((proj) => (
            <div 
              key={proj.id} 
              onClick={() => setSelectedProject(proj)}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 aspect-[4/3] cursor-pointer ring-1 ring-slate-700 hover:ring-red-500 transition-all shadow-lg"
            >
              <img src={proj.image} alt={proj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-bold rounded-full w-fit mb-3">
                  {proj.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-1">{proj.title}</h4>
                <p className="text-slate-300 text-sm font-medium">{proj.client}</p>
                
                <div className="overflow-hidden h-0 group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-red-400 text-sm font-bold flex items-center gap-1">Ver caso de estudio detallado &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
            >
              <X size={18} />
            </button>

            <div className="h-40 sm:h-48 w-full relative flex-shrink-0">
              <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 sm:p-8 w-full">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-2 inline-block shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 leading-tight">{selectedProject.title}</h3>
                <p className="text-slate-300 font-medium text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  Cliente: {selectedProject.client}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style dangerouslySetInnerHTML={{__html: "::-webkit-scrollbar { display: none; }"}} />
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-red-500 font-mono text-xs">01.</span> El Reto Operativo
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-red-500 font-mono text-xs">02.</span> La Solucion KoolRed
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 h-fit shadow-inner">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Impacto Real</h4>
                <ul className="space-y-3 mb-6">
                  {selectedProject.results.map((res: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-400 text-xs">
                      <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Stack Tecnologico</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string, idx: number) => (
                    <span key={idx} className="px-2 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-bold rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
              <h4 className="text-sm font-bold text-white">¿Tiene un reto similar en su infraestructura?</h4>
              <a href="https://wa.me/573154940908" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                Cotizar Solucion Parecida
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


