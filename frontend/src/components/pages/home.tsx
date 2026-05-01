import { SlideshowDemo } from "@/components/blocks/slideshow-demo";
import { MarcasTicker } from "@/components/blocks/marcas-ticker";
import { StatsSection } from "@/components/blocks/stats-section";
import { ServiciosGrid } from "@/components/blocks/servicios-grid";
import { ProcesoGrid } from "@/components/blocks/proceso-grid";
import { ProyectosGrid } from "@/components/blocks/proyectos-grid";
import { TestimoniosGrid } from "@/components/blocks/testimonios-grid";
import { CtaSection } from "@/components/blocks/cta-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HomePage() {
  return (
    <main className="pt-0" id="inicio">
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
  );
}
