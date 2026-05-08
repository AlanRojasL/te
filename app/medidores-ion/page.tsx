"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Activity, ShieldAlert, Cpu, Calculator, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ionModels = [
  {
    id: "ion9000",
    name: "ION 9000",
    subtitle: "El medidor de calidad de energía más avanzado",
    description: "Diseñado para las aplicaciones de energía más exigentes. Proporciona una precisión inigualable y herramientas de análisis de calidad de energía de vanguardia para detectar, predecir y prevenir problemas en redes críticas.",
    accuracy: "Clase 0.1S (IEC 62053-22)",
    pqClass: "Clase A (IEC 61000-4-30 Ed. 3)",
    features: [
      "Certificación IEC 62586-2 (Instrumentos PQ)",
      "Cumplimiento total NTCSE (Perú) y EN 50160",
      "Detección patentada de dirección de disturbios",
      "Módulo de ciberseguridad integrado",
    ],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ion8650",
    name: "ION 8650",
    subtitle: "El estándar para facturación y suministro",
    description: "Ideal para redes de servicios públicos e industriales. Combina mediciones de facturación altamente precisas con un análisis exhaustivo de la calidad de la energía, cumpliendo estrictamente la NTCSE.",
    accuracy: "Clase 0.2S (IEC 62053-22)",
    pqClass: "Clase A / S (IEC 61000-4-30)",
    features: [
      "Medición bidireccional de 4 cuadrantes",
      "Monitoreo estricto de cumplimiento NTCSE",
      "Protocolos DNP3, IEC 61850 y Modbus",
      "Homologación INACAL para facturación",
    ],
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ion7400",
    name: "ION 7400",
    subtitle: "Versatilidad y compacidad para tableros",
    description: "Perfecto para aplicaciones donde el espacio es limitado pero se requiere un monitoreo robusto de calidad de energía y capacidades avanzadas de integración directa a Power Monitoring Expert (PME).",
    accuracy: "Clase 0.2S (IEC 62053-22)",
    pqClass: "Clase S (IEC 61000-4-30)",
    features: [
      "Diseño ultracompacto para montaje en panel o riel DIN",
      "Soporte para reportes NTCSE básicos",
      "Registro de datos y tendencias integrados",
      "Integración nativa con software PME",
    ],
    imageUrl: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function MedidoresIONPage() {
  const [selectedModel, setSelectedModel] = useState(ionModels[0]);

  const generalFeatures = [
    {
      title: "Facturación de Alta Precisión",
      description: "Cumplimiento estricto de normativas vigentes (Clase 0.1S y 0.2S). Fundamental para Clientes Libres.",
      icon: <Calculator className="h-8 w-8 text-[#0A192F]" />,
    },
    {
      title: "Análisis NTCSE Avanzado",
      description: "Captura de formas de onda de altísima velocidad y análisis detallado de armónicos e interarmónicos.",
      icon: <Activity className="h-8 w-8 text-[#0A192F]" />,
    },
    {
      title: "Dirección de Disturbios",
      description: "Algoritmos patentados para determinar instantáneamente el origen de un sag/swell (arriba o abajo).",
      icon: <ShieldAlert className="h-8 w-8 text-[#0A192F]" />,
    },
    {
      title: "Arquitectura Modular ION",
      description: "Lógica interna programable que permite adaptar el analizador a aplicaciones de control específicas.",
      icon: <Cpu className="h-8 w-8 text-[#0A192F]" />,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Header (Industrial Dark Theme) */}
      <section className="bg-[#0A192F] py-24 text-white relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20"
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
               backgroundSize: `40px 40px`
             }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#3dcd58]/10 blur-[120px] rounded-full z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center rounded-full bg-slate-900/60 px-5 py-2 text-sm font-mono font-medium text-[#3dcd58] mb-6 border border-slate-700 backdrop-blur-md">
                Tecnología PowerLogic™ de Schneider Electric
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Analizadores Avanzados <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3dcd58] to-emerald-300">Serie ION</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                El estándar metrológico en calidad de energía. Precisión sin precedentes para aplicaciones críticas en el sector eléctrico e industrial.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* General Information about ION Technology */}
      <section className="py-32 bg-slate-50 relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">¿Por qué elegir la Tecnología ION?</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Los medidores de la serie ION no son simples registradores de consumo. Son computadoras de borde avanzadas diseñadas para capturar la "huella digital" completa de cualquier evento eléctrico en la red.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {generalFeatures.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <SpotlightCard className="h-full bg-white border-slate-200 rounded-3xl" spotlightColor="rgba(61, 205, 88, 0.15)">
                  <div className="p-10">
                    <div className="mb-8 h-16 w-16 bg-[#003b70]/5 rounded-2xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Viewer Section */}
      <section className="py-32 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-slate-100 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Especificaciones Técnicas</h2>
            <p className="text-xl text-slate-600">
              Selecciona un analizador de red para consultar sus capacidades y certificaciones metrológicas.
            </p>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            {/* Sidebar Selectors */}
            <div className="w-full lg:w-1/4 space-y-4">
              {ionModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model)}
                  className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group
                    ${selectedModel.id === model.id 
                      ? "border-[#3dcd58] bg-emerald-50/50 shadow-md" 
                      : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50"
                    }`}
                >
                  <div>
                    <h3 className={`font-extrabold text-lg ${selectedModel.id === model.id ? "text-[#0A192F]" : "text-slate-600"}`}>
                      {model.name}
                    </h3>
                  </div>
                  <ChevronRight className={`h-5 w-5 ${selectedModel.id === model.id ? "text-[#3dcd58]" : "text-slate-400 group-hover:text-[#3dcd58]"}`} />
                </button>
              ))}
            </div>

            {/* Dynamic Content Panel */}
            <div className="w-full lg:w-3/4 bg-[#0A192F] text-white rounded-[2rem] p-8 lg:p-14 shadow-2xl overflow-hidden relative">
              {/* Internal glow for dark panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3dcd58]/10 blur-[80px] rounded-full pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedModel.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
                >
                  {/* Text Content */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-extrabold mb-3 text-white">{selectedModel.name}</h2>
                      <p className="text-lg font-medium text-[#3dcd58]">{selectedModel.subtitle}</p>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {selectedModel.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-700/50">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Precisión</p>
                        <p className="font-mono text-xl font-medium text-[#3dcd58]">{selectedModel.accuracy}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">PQ Class</p>
                        <p className="font-mono text-xl font-medium text-[#3dcd58]">{selectedModel.pqClass}</p>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {selectedModel.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#3dcd58] mr-4 shrink-0 mt-0.5" />
                          <span className="text-slate-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Content */}
                  <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-700 bg-slate-800/50 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent z-10 opacity-60" />
                    <Image
                      src={selectedModel.imageUrl}
                      alt={selectedModel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
