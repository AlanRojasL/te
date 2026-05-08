"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Activity, Zap, ShieldCheck, ArrowRight, Award, TrendingUp, Cpu, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const partners = [
  { name: "Sector Minero", description: "Gestión de energía en alta tensión" },
  { name: "Industria Manufacturera", description: "Calidad de energía y mitigación" },
  { name: "Distribuidores Eléctricos", description: "Sistemas de facturación ION" },
  { name: "Centros de Datos", description: "Confiabilidad 99.999% con EcoStruxure" },
  { name: "Generación Renovable", description: "Integración BESS y automatización" },
];

const newsItems = [
  { id: 1, title: "Actualización NTCSE: Nuevos límites de inyección", date: "05 May, 2026", cat: "Regulación" },
  { id: 2, title: "Lanzamiento firmware ION9000 v3.2", date: "28 Abr, 2026", cat: "Producto" },
  { id: 3, title: "Implementación PME 2025 en minera del sur", date: "15 Abr, 2026", cat: "Casos" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Section (Enterprise Dark Theme) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0A192F] text-white pt-24 pb-12">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20"
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
               backgroundSize: `40px 40px`
             }}
        />
        
        {/* Glow effect */}
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#3dcd58]/20 blur-[120px] rounded-full z-0" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-[#003b70]/50 blur-[150px] rounded-full z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              <FadeIn>
                <div className="inline-flex items-center rounded-full bg-slate-900/60 px-5 py-2 text-sm font-mono font-medium text-[#3dcd58] mb-4 border border-slate-700 backdrop-blur-md">
                  <Award className="mr-2 h-4 w-4" />
                  EcoStruxure™ Certified Partner
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  Inteligencia Energética <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3dcd58] to-emerald-300">
                    para Entornos Críticos.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl">
                  Transformamos la infraestructura eléctrica industrial. Especialistas en medidores PowerLogic ION y el software Power Monitoring Expert (PME) en Perú.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-5 pt-6">
                <Link href="/plataforma-pme">
                  <Button size="lg" className="w-full sm:w-auto bg-[#3dcd58] hover:bg-emerald-500 text-slate-950 border-0 h-16 px-10 text-lg font-bold shadow-lg shadow-[#3dcd58]/20 transition-all rounded-xl">
                    Descubrir Plataforma PME
                  </Button>
                </Link>
                <Link href="/medidores-ion">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-slate-600 hover:bg-slate-800 hover:text-white h-16 px-10 text-lg font-semibold bg-transparent transition-all rounded-xl">
                    Explorar Medidores ION
                  </Button>
                </Link>
              </FadeIn>
            </div>
            
            {/* Right Terminal/News */}
            <div className="lg:col-span-4 hidden lg:block">
              <FadeIn direction="left" delay={0.3}>
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-6 border-b border-slate-800 pb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-[#3dcd58]" />
                    <span className="ml-4 font-mono text-xs text-slate-400 tracking-wider">TE_SOLUTIONS_FEED</span>
                  </div>
                  <ul className="space-y-5">
                    {newsItems.map((item) => (
                      <li key={item.id} className="group">
                        <Link href="#" className="block">
                          <span className="font-mono text-[10px] text-[#3dcd58] mb-1 block">[{item.cat}] {item.date}</span>
                          <h3 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors leading-tight">
                            {item.title}
                          </h3>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <Link href="/actualidad" className="flex items-center text-xs font-mono text-slate-400 hover:text-[#3dcd58] transition-colors">
                      VER_TODOS_LOS_REGISTROS <ArrowUpRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Social Proof Marquee */}
        <div className="relative z-20 mt-20 pt-10 border-t border-white/5 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <p className="text-center text-sm font-mono text-slate-500 tracking-widest uppercase">Especialistas en arquitecturas de alta disponibilidad</p>
          </div>
          <InfiniteMovingCards items={partners} direction="right" speed="slow" />
        </div>
      </section>

      {/* Services/Highlights - Spotlight Cards */}
      <section className="py-32 bg-slate-50 relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Arquitectura Base para <span className="text-[#003b70]">Industria 4.0</span>
            </h2>
            <p className="text-xl text-slate-600">
              Implementamos las bases tecnológicas necesarias para la digitalización de la energía, cumpliendo estrictamente con las regulaciones peruanas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <SpotlightCard className="h-full bg-white border-slate-200 rounded-3xl" spotlightColor="rgba(61, 205, 88, 0.15)">
                <div className="p-10 space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-[#003b70]/5 flex items-center justify-center text-[#003b70]">
                    <Activity className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Gestión de Energía PME</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Historizador avanzado e integración de dispositivos de medida. Análisis profundo de calidad de energía y reportería automática.
                  </p>
                  <Link href="/plataforma-pme" className="inline-flex items-center text-base font-bold text-[#3dcd58] hover:text-emerald-600 mt-4 group">
                    Especificaciones EMS <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <SpotlightCard className="h-full bg-white border-slate-200 rounded-3xl" spotlightColor="rgba(61, 205, 88, 0.15)">
                <div className="p-10 space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-[#003b70]/5 flex items-center justify-center text-[#003b70]">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Analizadores Serie ION</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Medición de alta precisión con homologación INACAL (Clase 0.2S). Cumplimiento riguroso de la NTCSE en calidad de suministro.
                  </p>
                  <Link href="/medidores-ion" className="inline-flex items-center text-base font-bold text-[#3dcd58] hover:text-emerald-600 mt-4 group">
                    Ver catálogo ION <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <SpotlightCard className="h-full bg-white border-slate-200 rounded-3xl" spotlightColor="rgba(61, 205, 88, 0.15)">
                <div className="p-10 space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-[#003b70]/5 flex items-center justify-center text-[#003b70]">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Auditoría y Puesta en Marcha</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Como Partner Integrador Certificado, garantizamos la correcta parametrización y dimensionamiento de soluciones de potencia.
                  </p>
                  <Link href="/contacto" className="inline-flex items-center text-base font-bold text-[#3dcd58] hover:text-emerald-600 mt-4 group">
                    Soporte técnico <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* KPI / Stats Section */}
      <section className="py-24 bg-[#003b70] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            <FadeIn delay={0.1}>
              <div className="space-y-2">
                <h4 className="text-5xl md:text-6xl font-extrabold font-mono text-[#3dcd58]">100%</h4>
                <p className="text-slate-300 font-medium uppercase tracking-wide text-sm">Cumplimiento NTCSE</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-2">
                <h4 className="text-5xl md:text-6xl font-extrabold font-mono text-[#3dcd58]">+50</h4>
                <p className="text-slate-300 font-medium uppercase tracking-wide text-sm">Proyectos PME</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-2">
                <h4 className="text-5xl md:text-6xl font-extrabold font-mono text-[#3dcd58]">0.1S</h4>
                <p className="text-slate-300 font-medium uppercase tracking-wide text-sm">Precisión Máxima</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="space-y-2">
                <h4 className="text-5xl md:text-6xl font-extrabold font-mono text-[#3dcd58]">24/7</h4>
                <p className="text-slate-300 font-medium uppercase tracking-wide text-sm">Monitoreo y Soporte</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Us Technical Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Tableros eléctricos industriales y automatización"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ingeniería de Clase Mundial para Entornos Críticos
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                El mercado de Clientes Libres en Perú exige una gestión tarifaria exacta y una confiabilidad absoluta. Un disturbio en la red no solo afecta a los equipos de potencia, sino que detiene procesos productivos completos.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                En TE Solutions Perú, implementamos arquitecturas EcoStruxure completas, abarcando desde medidores ION en cabecera, hasta la integración y monitoreo de Sistemas de Almacenamiento de Energía por Baterías (BESS).
              </p>
              
              <div className="pt-6">
                <Button size="lg" className="bg-[#0A192F] hover:bg-slate-800 text-white h-14 px-8 text-lg font-semibold rounded-xl">
                  Conoce nuestra metodología
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
