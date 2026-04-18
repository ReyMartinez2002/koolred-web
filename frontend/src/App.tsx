import { SlideshowDemo } from "@/components/blocks/slideshow-demo";
import { StatsSection } from "@/components/blocks/stats-section";
import { ServiciosGrid } from "@/components/blocks/servicios-grid";
import { Navbar } from "@/components/blocks/navbar";
import { ProcesoGrid } from "@/components/blocks/proceso-grid";
import { ProyectosGrid } from "@/components/blocks/proyectos-grid";
import { TestimoniosGrid } from "@/components/blocks/testimonios-grid";
import { Footer } from "@/components/blocks/footer";
import { CtaSection } from "@/components/blocks/cta-section";
import { WhatsappFloat } from "@/components/blocks/whatsapp-float";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="pt-0 md:pt-20" id="inicio">
        <SlideshowDemo />
        <StatsSection />
        <ServiciosGrid />
        <ProcesoGrid />
        <ProyectosGrid />
        <TestimoniosGrid />
        <CtaSection />
      </main>

      <Footer />
      
      {/* Botón Flotante Global */}
      <WhatsappFloat />
    </div>
  );
}
