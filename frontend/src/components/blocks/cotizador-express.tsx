import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, Network, ShieldCheck, ThermometerSun, Check, Cpu, BatteryCharging, PcCase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CotizadorExpress() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    area: '',
    urgency: '',
    budget: ''
  });

  // Áreas ampliadas
  const areas = [
    { id: 'energia', icon: <Zap size={24}/>, title: 'Energía / RETIE' },
    { id: 'ev', icon: <BatteryCharging size={24}/>, title: 'Cargadores EV' },
    { id: 'ia', icon: <Cpu size={24}/>, title: 'Automatización' },
    { id: 'hvac', icon: <ThermometerSun size={24}/>, title: 'HVAC / Aires' },
    { id: 'datos', icon: <Network size={24}/>, title: 'Data Center / Redes' },
    { id: 'pc', icon: <PcCase size={24}/>, title: 'Soporte IT / PC' }
  ];

  const handleAreaSelect = (id: string) => {
    setSelection({ ...selection, area: id });
    setStep(2);
  };

  const handleUrgencySelect = (val: string) => {
    setSelection({ ...selection, urgency: val });
    setStep(3);
  };

  const generateWhatsAppLink = () => {
    const msg = "Hola Equipo KoolRed, me gustaria cotizar un servicio de *" + selection.area.toUpperCase() + "*.%0A%0A*Nivel de urgencia:* " + selection.urgency + "%0A%0AQuisiera que un especialista se ponga en contacto conmigo.";
    return "https://wa.me/573154940908?text=" + msg;
  };

  return (
    <>
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setIsOpen(true)}
        className="fixed top-1/3 left-0 z-40 bg-red-600 hover:bg-red-700 text-white pl-3 pr-4 py-3 rounded-r-xl shadow-2xl flex items-center gap-2 group transition-all"
      >
        <Calculator size={20} className="group-hover:animate-bounce" />
        <span className="font-bold text-sm tracking-wide hidden md:block group-hover:pl-1 transition-all">Cotizador Rápido</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => { setIsOpen(false); setStep(1); }}></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
            >
              <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px] rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    <Calculator className="text-red-500" />
                    Cotizador de Servicios
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">Seleccione su área de interés para asignarle al ingeniero adecuado.</p>
                </div>
                <button onClick={() => { setIsOpen(false); setStep(1); }} className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors z-10">
                  X
                </button>
              </div>

              <div className="w-full h-1 bg-slate-800">
                <div 
                  className="h-full bg-red-600 transition-all duration-500" 
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>

              <div className="p-6 sm:p-10 bg-slate-900 min-h-[350px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h4 className="text-lg font-bold text-white mb-6 text-center">1. ¿Qué área técnica necesita intervenir?</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {areas.map(area => (
                          <button 
                            key={area.id}
                            onClick={() => handleAreaSelect(area.id)}
                            className="p-5 bg-slate-950 border border-slate-800 hover:border-red-500 hover:bg-slate-800/50 rounded-xl flex flex-col items-center gap-3 transition-all group"
                          >
                            <div className="text-slate-400 group-hover:text-red-500 transition-colors">
                              {area.icon}
                            </div>
                            <span className="text-slate-300 font-bold text-xs text-center">{area.title}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h4 className="text-lg font-bold text-white mb-6 text-center">2. ¿Qué nivel de urgencia tiene?</h4>
                      <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
                        {['Emergencia Operativa (HOY)', 'Prioridad Alta (Próximos días)', 'Planeación Preventiva'].map(opt => (
                          <button 
                            key={opt}
                            onClick={() => handleUrgencySelect(opt)}
                            className="p-5 bg-slate-950 border border-slate-800 hover:border-red-500 hover:bg-slate-800/50 rounded-xl text-slate-300 font-bold text-sm text-left transition-all"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={32} />
                      </div>
                      <h4 className="text-2xl font-black text-white mb-3">Diagnostico Creado</h4>
                      <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Área asignada: <span className="font-bold text-white">{selection.area.toUpperCase()}</span>.<br/>
                        Envíe los datos a nuestra mesa de ayuda para asignarle un técnico hoy mismo.
                      </p>
                      
                      <a 
                        href={generateWhatsAppLink()} 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={() => { setIsOpen(false); setStep(1); }}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105"
                      >
                        Enviar Solicitud al Área Técnica <ArrowRight size={20} />
                      </a>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              <div className="bg-slate-950 p-4 border-t border-slate-800 text-center flex justify-between items-center">
                 {step > 1 ? (
                   <button onClick={() => setStep(step - 1)} className="text-slate-500 hover:text-white text-sm font-bold transition-colors">
                     &larr; Volver
                   </button>
                 ) : <div></div>}
                 <span className="text-slate-600 text-xs font-mono uppercase tracking-widest">Paso {step} de 3</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}





