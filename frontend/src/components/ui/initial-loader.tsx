import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular un mini tiempo de carga para que el usuario sienta la "inicialización del software"
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
             <img src="/assets/LOGO .png" alt="KoolRed" className="h-12" onError={(e) => e.currentTarget.style.display='none'} />
             <span className="text-3xl font-bold tracking-tight text-white">KoolRed<span className="text-red-500">.</span></span>
          </motion.div>
          
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
             <motion.div 
               className="absolute top-0 left-0 h-full bg-red-600 rounded-full"
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.3, ease: "circInOut" }}
             />
          </div>
          <p className="text-slate-500 text-xs mt-4 uppercase tracking-widest font-mono animate-pulse">
            Iniciando Protocolos Operativos...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
