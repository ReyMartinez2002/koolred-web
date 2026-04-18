import { SlideshowDemo } from "@/components/blocks/slideshow-demo";
import { ServiciosGrid } from "@/components/blocks/servicios-grid";
import { Navbar } from "@/components/blocks/navbar";
import { ProcesoGrid } from "@/components/blocks/proceso-grid";
import { TestimoniosGrid } from "@/components/blocks/testimonios-grid";
import { Footer } from "@/components/blocks/footer";
import { CtaSection } from "@/components/blocks/cta-section";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="pt-0 md:pt-20" id="inicio">
        <SlideshowDemo />
        <ServiciosGrid />
        <ProcesoGrid />
        <TestimoniosGrid />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
