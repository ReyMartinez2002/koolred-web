import { SlideshowDemo } from "@/components/blocks/slideshow-demo";
import { MarcasTicker } from "@/components/blocks/marcas-ticker";
import { StatsSection } from "@/components/blocks/stats-section";
import { ServiciosGrid } from "@/components/blocks/servicios-grid";
import { Navbar } from "@/components/blocks/navbar";
import { ProcesoGrid } from "@/components/blocks/proceso-grid";
import { ProyectosGrid } from "@/components/blocks/proyectos-grid";
import { TestimoniosGrid } from "@/components/blocks/testimonios-grid";
import { Footer } from "@/components/blocks/footer";
import { CtaSection } from "@/components/blocks/cta-section";
import { WhatsappFloat } from "@/components/blocks/whatsapp-float";
import { CotizadorExpress } from "@/components/blocks/cotizador-express";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InitialLoader } from "@/components/ui/initial-loader";

export default function App() {
  return (
    <>
      <InitialLoader />
      <CotizadorExpress />

      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-red-500 selection:text-white">
        <Navbar />

        <main className="pt-0 md:pt-20" id="inicio">
          <SlideshowDemo />
          <ScrollReveal>
             <StatsSection />
          </ScrollReveal>
          
          <ScrollReveal>
             <MarcasTicker />
          </ScrollReveal>

          <ScrollReveal>
             <ServiciosGrid />
          </ScrollReveal>

          <ScrollReveal>
             <ProcesoGrid />
          </ScrollReveal>

          <ScrollReveal>
             <ProyectosGrid />
          </ScrollReveal>

          <ScrollReveal>
             <TestimoniosGrid />
          </ScrollReveal>

          <ScrollReveal>
             <CtaSection />
          </ScrollReveal>
        </main>

        <Footer />
        <WhatsappFloat />
      </div>
    </>
  );
}
