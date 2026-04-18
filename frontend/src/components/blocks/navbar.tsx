import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/LOGO .png" alt="KoolRed Logo" className="h-10" onError={(e) => e.currentTarget.style.display='none'} />
          <span className="text-xl font-bold tracking-tight text-white">KoolRed<span className="text-red-500">.</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          <a href="https://wa.me/573154940908" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            Cotizar Proyecto
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-4 shadow-xl">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white text-base font-medium">Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white text-base font-medium">Servicios</a>
          <a href="#proceso" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white text-base font-medium">Proceso de Trabajo</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white text-base font-medium">Contacto</a>
          <a href="https://wa.me/573154940908" target="_blank" rel="noreferrer" className="block text-center mt-4 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            Cotizar Proyecto
          </a>
        </div>
      )}
    </nav>
  );
}
