import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";
import { WhatsappFloat } from "@/components/blocks/whatsapp-float";
import { CotizadorExpress } from "@/components/blocks/cotizador-express";
import { InitialLoader } from "@/components/ui/initial-loader";
import { HomePage } from "@/components/pages/home";
import { AdecuacionesPage } from "@/components/pages/adecuaciones";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <InitialLoader />
      <CotizadorExpress />

      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-red-500 selection:text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/adecuaciones-electricas.html" element={<AdecuacionesPage />} />
        </Routes>

        <Footer />
        <WhatsappFloat />
      </div>
    </Router>
  );
}

