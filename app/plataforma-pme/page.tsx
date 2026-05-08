"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { CheckCircle2, LineChart, Server, Settings, Zap } from "lucide-react";
import Image from "next/image";

export default function PlataformaPMEPage() {
  const benefits = [
    {
      title: "Monitoreo Analítico e Histórico",
      description: "Visualiza el estado de tu red eléctrica con dashboards dinámicos. Integración nativa con RTUs y medidores a través de protocolos industriales.",
      icon: <Zap className="h-8 w-8 text-[#003b70]" />,
    },
    {
      title: "Análisis de Calidad de Energía",
      description: "Detecta y diagnostica transitorios, armónicos y sags/swells antes de que afecten tus procesos productivos críticos.",
      icon: <LineChart className="h-8 w-8 text-[#003b70]" />,
    },
    {
      title: "Reportes Automatizados NTCSE",
      description: "Genera informes de cumplimiento normativo y facturación de forma automática, listos para auditorías energéticas.",
      icon: <Settings className="h-8 w-8 text-[#003b70]" />,
    },
    {
      title: "Eficiencia y Optimización",
      description: "Identifica fugas y consumos ocultos. Toma decisiones basadas en datos históricos para reducir la facturación máxima.",
      icon: <Server className="h-8 w-8 text-[#003b70]" />,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Header */}
      <section className="bg-[#003b70] py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#003b70]/80 to-slate-900/95 z-10" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center rounded-full bg-slate-800/80 px-4 py-1.5 text-sm text-green-400 mb-8 border border-slate-700 font-medium">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
                Software Edge Control | Schneider Electric
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                EcoStruxure™ Power Monitoring Expert (PME)
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                El software Historizador y de Gestión de Energía (EMS) más avanzado del mercado. Transforma los datos de tus medidores e instrumentación en inteligencia operativa y bases de datos estructuradas.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Control Absoluto sobre tu Infraestructura Eléctrica
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Diseñado específicamente para aplicaciones industriales y centros de datos, PME proporciona una ventana transparente a la red de distribución. Ayuda a los ingenieros de planta a garantizar el tiempo de actividad y mejorar radicalmente la eficiencia operativa.
              </p>
              
              <ul className="space-y-5">
                {[
                  "Integración perfecta con medidores ION y protección de relés.",
                  "Arquitectura cliente-servidor escalable para múltiples plantas.",
                  "Alarmas avanzadas y análisis de secuencia de eventos (SOE).",
                  "Módulo especializado de eficiencia energética e ISO 50001.",
                  "Gestión avanzada de bases de datos SQL e interrogación de activos para extracción de reportes a medida."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-7 w-7 text-green-500 mr-4 shrink-0" />
                    <span className="text-lg text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white font-bold h-14 px-10 text-lg shadow-lg">
                  Solicitar Arquitectura PME
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-video flex items-center justify-center p-2">
                {/* PME Dashboard Dark Image */}
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Dashboard analítico y de calidad de energía de Power Monitoring Expert" 
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Capacidades del Sistema</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Descubre cómo la digitalización de tu red eléctrica se traduce en rentabilidad inmediata y protección de activos.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 h-full">
                  <div className="h-16 w-16 rounded-xl bg-slate-100 flex items-center justify-center mb-8">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
