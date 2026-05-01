import { useEffect } from 'react';
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AdecuacionesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0b1120] text-slate-300">
      {/* Hero Section (Replicando la imagen 1) */}
      <section className="relative pt-32 pb-24 px-6 min-h-[70vh] flex flex-col justify-center border-b border-white/5 overflow-hidden">
        {/* Lneas de fondo tipo circuito */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-4 mb-8 bg-slate-900/50 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-md">
            <span className="px-4 py-1.5 bg-blue-900/40 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">SEGMENTO: INDUSTRIAL & COMERCIAL</span>
            <span className="px-4 py-1.5 text-red-400 text-xs font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
              ELECTRICIDAD  RETIE / NTC  ENTREGA TRAZABLE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Ingeniera elctrica <br/>
            con cumplimiento <span className="text-[#ef4444]">RETIE/NTC.</span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Diseamos, adecuamos y verificamos redes elctricas para cargas crticas, con documentacin completa y pruebas en campo.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="https://wa.me/573154940908" className="px-8 py-3 bg-[#dc2626] hover:bg-[#ef4444] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              Hablar con un ingeniero
            </a>
            <a href="#proceso" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium border border-slate-700 transition-all">
              Ver proceso &darr;
            </a>
          </div>
        </div>
      </section>

      {/* Stats (Replicando la barra de nmeros abajo del hero) */}
      <section className="border-b border-white/5 bg-[#0a0f1d]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-800">
            <div>
              <div className="text-4xl font-black text-white mb-1">120+</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Proyectos Ejecutados</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Cumplimiento RETIE/NTC</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">48h</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Respuesta de Urgencia</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">7+</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Aos de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qu KoolRed (Tarjetas de la imagen 2) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2">Por qu KoolRed</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">Ingeniera verificada, <br/>no solo instalada</h3>
          <p className="text-slate-400 max-w-xl">Entregamos evidencia, no solo ejecucin. Cada proyecto incluye documentacin lista para auditora.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#0d142b] border border-slate-800 hover:border-red-500/30 transition-all group">
            <div className="w-12 h-12 bg-red-950/30 border border-red-900/50 rounded-xl flex items-center justify-center text-red-500 mb-6">🛡️</div>
            <h4 className="text-xl font-bold text-white mb-3">Cumplimiento sin reprocesos</h4>
            <p className="text-sm text-slate-400">RETIE/NTC integrado desde el diseo hasta la entrega. Planos, memorias y actas que pasan interventora a la primera.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#0d142b] border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-950/30 border border-blue-900/50 rounded-xl flex items-center justify-center text-blue-500 mb-6">☑️</div>
            <h4 className="text-xl font-bold text-white mb-3">Ejecucin verificada</h4>
            <p className="text-sm text-slate-400">Pruebas de continuidad, aislamiento y puesta a tierra en campo. Actas firmadas antes de energizar cualquier tablero.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#0d142b] border border-slate-800 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 bg-emerald-950/30 border border-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-500 mb-6">⏱️</div>
            <h4 className="text-xl font-bold text-white mb-3">Cero tiempo muerto</h4>
            <p className="text-sm text-slate-400">Planificamos ventanas de intervencin para no detener tu produccin. Coordinamos con tu equipo de OT/IT en cada etapa.</p>
          </div>
        </div>
      </section>

      {/* Proceso y Fases (Imagen 3) */}
      <section id="proceso" className="py-24 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xs font-bold text-red-600 tracking-widest uppercase mb-2">Proceso de Trabajo</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">4 fases, ruta verificable</h3>
            <p className="text-slate-600 mt-3">Cada etapa entrega evidencia que el cliente puede auditar. Selecciona una fase para ver el detalle.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 border border-slate-200 rounded-2xl p-2 shadow-sm bg-slate-50">
            {/* Men de Fases */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <button className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-red-200 text-left">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Diagnstico</div>
                  <div className="text-xs text-slate-500">Levantamiento en campo</div>
                </div>
              </button>
              <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-white text-left opacity-60 hover:opacity-100 transition-all">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Ingeniera</div>
                  <div className="text-xs text-slate-500">Diseo y memorias</div>
                </div>
              </button>
              <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-white text-left opacity-60 hover:opacity-100 transition-all">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Ejecucin</div>
                  <div className="text-xs text-slate-500">Intervencin verificada</div>
                </div>
              </button>
              <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-white text-left opacity-60 hover:opacity-100 transition-all">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Entrega</div>
                  <div className="text-xs text-slate-500">Documentacin y soporte</div>
                </div>
              </button>
            </div>

            {/* Contenido de la Fase */}
            <div className="w-full md:w-2/3 p-6 bg-white rounded-xl border border-slate-100">
              <h4 className="text-2xl font-black text-slate-900 mb-3">Diagnstico tcnico integral</h4>
              <p className="text-slate-600 mb-6 text-sm">Visitamos el sitio, levantamos el estado actual y definimos el alcance exacto del proyecto antes de emitir cualquier propuesta.</p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">✓</div>
                  Levantamiento de cargas, tableros y canalizaciones existentes
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">✓</div>
                  Identificacin de riesgos elctricos y brechas RETIE/NTC
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">✓</div>
                  Medicin de puesta a tierra, aislamiento y calidad de energa
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">✓</div>
                  Informe de diagnstico con prioridades y ruta de intervencin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Entregables (Imagen 4) */}
      <section className="py-24 bg-[#0a0f1d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2">Entregables</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Documentacin que resiste <br/>cualquier auditora</h3>
            <p className="text-slate-400">Todo proyecto incluye estos entregables. Sin excepciones.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4">📄</div>
              <h4 className="text-lg font-bold text-white mb-2">Planos elctricos</h4>
              <p className="text-sm text-slate-400 mb-4">Diseo en AutoCAD/DWG con revisiones y sellos del ingeniero responsable.</p>
              <div className="flex gap-2"><span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">UNIFILAR</span><span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">AS-BUILT</span></div>
            </div>
            
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4">📘</div>
              <h4 className="text-lg font-bold text-white mb-2">Memorias de clculo</h4>
              <p className="text-sm text-slate-400 mb-4">Clculo de conductores, cajas, protecciones, selectividad y coordinacin.</p>
              <div className="flex gap-2"><span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">CORTOCIRCUITO</span><span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">SELECTIVIDAD</span></div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4">📝</div>
              <h4 className="text-lg font-bold text-white mb-2">Actas de prueba</h4>
              <p className="text-sm text-slate-400 mb-4">Continuidad, aislamiento, resistencia de puesta a tierra y balanceo de fases.</p>
              <div className="flex gap-2"><span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">FAT</span><span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">SAT</span></div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4">💼</div>
              <h4 className="text-lg font-bold text-white mb-2">Dossier RETIE/NTC</h4>
              <p className="text-sm text-slate-400 mb-4">Paquete documental completo listo para presentar ante interventora o ente certificador.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4">📷</div>
              <h4 className="text-lg font-bold text-white mb-2">Registro fotogrfico</h4>
              <p className="text-sm text-slate-400 mb-4">Evidencia visual antes, durante y despus de cada intervencin en campo.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-red-500 mb-4">📞</div>
              <h4 className="text-lg font-bold text-white mb-2">Soporte post-entrega</h4>
              <p className="text-sm text-slate-400 mb-4">30 das de soporte prioritario y acompaamiento tcnico tras la entrega del proyecto.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
