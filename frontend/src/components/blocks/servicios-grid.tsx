import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const serviciosData = [
  {
    id: 1,
    icon: <span className="text-3xl">🔌</span>,
    title: "Adecuaciones Eléctricas (RETIE)",
    description: "Intervenciones en tableros, canalizaciones y puesta a tierra con cumplimiento NTC 2050/RETIE.",
    stats: [
      { label: "Cumplimiento RETIE/NTC", value: "100%" },
      { label: "Proyectos ejecutados", value: "+50" },
      { label: "Respuesta de urgencia", value: "24/7" }
    ],
    features: [
      "Diagnóstico técnico integral con informe de riesgos y brechas.",
      "Ingeniería y diseño con memorias de cálculo de conductores y protección.",
      "Pruebas FAT en taller y SAT en sitio antes de energización.",
      "Planos as-built, actas de pruebas y dossier RETIE/NTC completo."
    ]
  },
  {
    id: 2,
    icon: <span className="text-3xl">🤖</span>,
    title: "Automatización Industrial e IA",
    description: "Flujos inteligentes con n8n y OpenAI para reducir errores manuales y agilizar reportes operativos.",
    stats: [
      { label: "Reducción de errores", value: "95%" },
      { label: "Ahorro horas/mes", value: "120h" },
      { label: "Uptime garantizado", value: "99.9%" }
    ],
    features: [
      "Integración directa con PLCs y sensores en planta.",
      "Flujos n8n para captura de datos y envíos a ERP corporativos.",
      "Bots de IA para clasificar alertas críticas.",
      "Reportes gerenciales automatizados en tiempo real."
    ]
  },
  {
    id: 3,
    icon: <span className="text-3xl">⚡</span>,
    title: "Electromovilidad (Cargadores EV)",
    description: "Infraestructura de carga para vehículos eléctricos, asegurando potencia y control de carga dinámico.",
    stats: [
      { label: "Marcas compatibles", value: "Todas" },
      { label: "Seguridad eléctrica", value: "NTC" },
      { label: "Gestión remota", value: "Sí" }
    ],
    features: [
      "Estudio de factibilidad y cálculo de demanda máxima.",
      "Suministro e instalación de cargadores nivel 2 y 3 (DC).",
      "Balanceo de carga dinámico para no exceder la acometida.",
      "Certificación técnica de la nueva infraestructura."
    ]
  },
  {
    id: 4,
    icon: <span className="text-3xl">❄️</span>,
    title: "Climatización y Mantenimiento HVAC",
    description: "Diagnóstico, control y mantenimiento de aires acondicionados con integración BMS.",
    stats: [
      { label: "Ahorro energético", value: "30%" },
      { label: "Mantenimiento", value: "24/7" },
      { label: "Integración BMS", value: "Total" }
    ],
    features: [
      "Planes preventivos y correctivos para equipos críticos.",
      "Ajuste de lazos de control de temperatura y humedad.",
      "Integración con sistemas BMS corporativos.",
      "Auditorías termográficas para detección de fugas."
    ]
  },
  {
    id: 5,
    icon: <span className="text-3xl">💻</span>,
    title: "Soporte IT y Mantenimiento PC",
    description: "Mantenimiento preventivo, correctivo y soporte técnico para infraestructura informática.",
    stats: [
      { label: "Soporte Remoto", value: "24/7" },
      { label: "Equipos", value: "+1000" },
      { label: "SLA", value: "< 2h" }
    ],
    features: [
      "Mesa de ayuda y soporte técnico especializado.",
      "Mantenimiento preventivo de hardware y optimización.",
      "Gestión de activos IT e inventario.",
      "Migración de datos y copias de seguridad."
    ]
  },
  {
    id: 6,
    icon: <span className="text-3xl">📷</span>,
    title: "CCTV y Seguridad Electrónica",
    description: "Sistemas de videovigilancia y control de acceso con monitoreo remoto seguro.",
    stats: [
      { label: "Disponibilidad", value: "99.9%" },
      { label: "Analítica IA", value: "Sí" },
      { label: "Almacenamiento", value: "+30d" }
    ],
    features: [
      "Diseño de cobertura y puntos ciegos.",
      "Instalación de cámaras IP de alta resolución y analítica.",
      "Sistemas de control de acceso biométrico.",
      "Integración en centros de monitoreo corporativos."
    ]
  },
  {
    id: 7,
    icon: <span className="text-3xl">🌐</span>,
    title: "Cableado Estructurado",
    description: "Redes certificadas de fibra óptica y cobre para transmisión de datos a alta velocidad.",
    stats: [
      { label: "Certificación", value: "Fluke" },
      { label: "Categorías", value: "6/6A/Fibra" },
      { label: "Garantía", value: "15 Años" }
    ],
    features: [
      "Diseño de topología de red y cuartos de equipos (MDF/IDF).",
      "Instalación de fibra óptica y UTP Categoría 6/6A.",
      "Certificación de enlaces con equipos Fluke Networks.",
      "Organización y marquillado estandarizado."
    ]
  },
  {
    id: 8,
    icon: <span className="text-3xl">🛡️</span>,
    title: "Soporte de Infraestructura 24/7",
    description: "Pólizas de servicio para mantener la operación crítica sin interrupciones.",
    stats: [
      { label: "Disponibilidad", value: "24/7" },
      { label: "Respuesta", value: "Inmediata" },
      { label: "Cobertura", value: "Nacional" }
    ],
    features: [
      "Monitoreo proactivo de la red y tableros eléctricos.",
      "Atención de emergencias y fallos críticos en sitio.",
      "Auditorías mensuales de estado operativo.",
      "Gestión de garantías y proveedores terceros."
    ]
  }
];

export function ServiciosGrid() {
  const [selectedService, setSelectedService] = useState<any>(null);

  React.useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedService]);

  return (
    <section id="servicios" className="py-24 relative border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Ingeniería & Tecnología</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Soluciones Operativas.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Portafolio completo de servicios diseados para garantizar la continuidad y eficiencia de su infraestructura crtica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviciosData.map((srv) => (
            <div 
              key={srv.id} 
              onClick={() => window.location.href = "/servicios/adecuaciones-electricas.html"}
              className="glass-panel rounded-2xl p-6 group neon-glow cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{srv.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {srv.description}
              </p>
              <div className="flex items-center text-red-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Ver Ficha Tcnica &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>

      </section>  ); }
