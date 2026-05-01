"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  titleLines: string[];
  kicker: string;
  description: string;
  videoSrc: string;
  href: string;
};

const SLIDES: Slide[] = [
  {
    id: "ia-n8n",
    titleLines: ["Automatizaci\u00f3n inteligente", "para tu operaci\u00f3n"],
    kicker: "IA + n8n",
    description:
      "Implementamos asistentes y flujos con IA que leen correos, clasifican informaci\u00f3n y generan acciones autom\u00e1ticas en segundos.",
    href: "ia-n8n.html",
    videoSrc: "/assets/n8nai.mp4",
  },
  {
    id: "adecuaciones",
    titleLines: ["Adecuaciones", "el\u00e9ctricas"],
    kicker: "Energ\u00eda",
    description:
      "Intervenciones en tableros, canalizaciones y puesta a tierra con cumplimiento NTC 2050/RETIE.",
    href: "adecuaciones-electricas.html",
    videoSrc: "/assets/Adecuaciones%20electricas%202.mp4",
  },
  {
    id: "comunicaciones",
    titleLines: ["Comunicaciones", "y cableado estructurado"],
    kicker: "Comunicaciones",
    description:
      "Dise\u00f1o, instalaci\u00f3n y certificaci\u00f3n de cableado estructurado, redes y canalizaciones.",
    href: "cableado-estructurado.html",
    videoSrc: "/assets/cableado%20estructurado%20.mp4",
  },
  {
    id: "cctv",
    titleLines: ["CCTV y", "seguridad"],
    kicker: "Seguridad",
    description: "Instalaci\u00f3n, configuraci\u00f3n y soporte para vigilancia continua.",
    href: "cctv.html",
    videoSrc: "/assets/CCTV.mp4",
  },
  {
    id: "hvac",
    titleLines: ["HVAC /", "BMS"],
    kicker: "Clima",
    description:
      "Diagn\u00f3stico, ajuste de control e integraci\u00f3n BMS para confort estable y eficiencia.",
    href: "hvac-bms.html",
    videoSrc: "/assets/HVAC%20VIDEO.mp4",
  },
  {
    id: "automatizacion",
    titleLines: ["Automatizaci\u00f3n", "y control"],
    kicker: "Control",
    description:
      "Integraci\u00f3n PLC/HMI, datos y alarmas para estabilidad de procesos y mejora medible.",
    href: "automatizacion.html",
    videoSrc:
      "/assets/Dise%C3%B1o%20el%C3%A9ctrico%20y%20automatizaci%C3%B3n%20profesional%20seg%C3%BAn%20norma%20RETIE%20%20NTC%20%C2%B7%20BMS%20%C2%B7%20Baja%20tensi%C3%B3n.mp4",
  },
  {
    id: "mantenimiento",
    titleLines: ["Mantenimiento", "el\u00e9ctrico"],
    kicker: "Continuidad",
    description:
      "Plan preventivo y correctivo con trazabilidad y soporte para activos cr\u00edticos.",
    href: "mantenimiento.html",
    videoSrc: "/assets/MANTENIMIENTO.mp4",
  },
  {
    id: "consultoria",
    titleLines: ["Consultor\u00eda", "t\u00e9cnica"],
    kicker: "Auditor\u00eda",
    description:
      "Auditor\u00eda de ingenier\u00eda y control de cantidades con informes para consorcios.",
    href: "revision-tecnica.html",
    videoSrc: "/assets/interventoria.mp4",
  },
];

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReduced(mediaQuery.matches);
    update();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }
    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  return prefersReduced;
}

function getVisibleIndices(current: number, total: number): Set<number> {
  if (total <= 3) {
    return new Set(Array.from({ length: total }, (_, i) => i));
  }
  return new Set([
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ]);
}

function SlideVideo({
  src,
  isActive,
  label,
}: {
  src: string;
  isActive: boolean;
  label: string;
}) {
  const ref = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    const video = ref.current;
    if (!video) {
      return;
    }
    if (!isActive) {
      video.pause();
      video.currentTime = 0;
      return;
    }
    video.play().catch(() => {});
  }, [isActive]);

  if (!src) {
    return (
      <div
        aria-label={label}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(15,26,64,0.85))]"
      />
    );
  }

  return (
    <video
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] motion-reduce:transition-none",
        isActive ? "scale-[1.02]" : "scale-100"
      )}
      muted
      playsInline
      loop
      preload={isActive ? "auto" : "metadata"}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function Slideshow() {
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const total = SLIDES.length;

  React.useEffect(() => {
    if (prefersReducedMotion || paused || total <= 1) {
      return;
    }
    const id = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 13000);
    return () => window.clearTimeout(id);
  }, [current, paused, prefersReducedMotion, total]);

  const visibleIndices = React.useMemo(
    () => getVisibleIndices(current, total),
    [current, total]
  );

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section
      className="hero-slider relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="hero-frame relative h-[100dvh] w-full overflow-hidden bg-black">
        
        {SLIDES.map((slide, index) => {
          const isActive = index === current;
          if (!visibleIndices.has(index)) return null;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none",
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <SlideVideo
                src={slide.videoSrc}
                isActive={isActive}
                label={slide.titleLines.join(" ")}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
              <div className="absolute inset-0 flex items-end sm:items-center sm:pl-10">
                <div className="hero-content w-full p-6 sm:p-12 md:p-20 lg:p-32">
                  <div
                    className={cn(
                      "max-w-full rounded-xl border border-[rgba(148,163,184,0.28)] bg-[#0b1024]/45 p-5 text-white shadow-[0_18px_40px_rgba(8,12,28,0.38)] backdrop-blur-sm transition-all duration-500 motion-reduce:transition-none sm:max-w-[520px] sm:rounded-2xl sm:p-6 lg:max-w-[720px]",
                      isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    )}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
                      {slide.kicker}
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                      {slide.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h2>
                    <p className="mt-3 max-w-[560px] text-[13px] leading-relaxed text-white/80 sm:text-sm md:text-base">
                      {slide.description}
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a className="inline-flex items-center justify-center px-6 py-3 border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all hover:scale-105 backdrop-blur w-full sm:w-auto" href={slide.href}>
                        {"Explorar soluci\u00f3n"}
                      </a>
                          <a className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105 w-full sm:w-auto gap-2" href="https://wa.me/573154940908">
                        {"Hablar con un ingeniero"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Anterior"
          className="slider-arrow slider-arrow--prev absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur transition-all hover:bg-white/10 hover:text-white"
        >
          {"\u2039"}
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente"
          className="slider-arrow slider-arrow--next absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur transition-all hover:bg-white/10 hover:text-white"
        >
          {"\u203a"}
        </button>

        <div className="slider-counter pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur sm:bottom-5 sm:right-6 sm:text-[11px]">
          {`0${current + 1} / 0${total}`}
        </div>
      </div>
    </section>
  );
}






