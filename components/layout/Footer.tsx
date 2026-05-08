import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#003b70] text-slate-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>TE Solutions</span>
              <span className="text-green-500">Perú</span>
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              Partner Integrador de Schneider Electric. Expertos en gestión de energía, analizadores de red y soluciones EcoStruxure para la industria peruana.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="https://www.facebook.com/tesolutions.pe" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-green-400 transition-colors bg-slate-800/50 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-base">
              <li><Link href="/" className="hover:text-green-400 transition-colors">Inicio</Link></li>
              <li><Link href="/plataforma-pme" className="hover:text-green-400 transition-colors">Plataforma PME</Link></li>
              <li><Link href="/medidores-ion" className="hover:text-green-400 transition-colors">Medidores ION</Link></li>
              <li><Link href="/actualidad" className="hover:text-green-400 transition-colors">Blog / Actualidad</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Soluciones Técnicas</h4>
            <ul className="space-y-3 text-base">
              <li>Historizador PME (EMS)</li>
              <li>Análisis de Calidad de Energía</li>
              <li>Filtros de Armónicos</li>
              <li>Auditorías NTCSE</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contacto Directo</h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-green-500 shrink-0" />
                <span>Lima, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-green-500 shrink-0" />
                {/* [ACTUALIZAR AQUÍ EL NÚMERO DE TELÉFONO] */}
                <span>+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-green-500 shrink-0" />
                {/* [ACTUALIZAR AQUÍ EL CORREO DE CONTACTO] */}
                <span>contacto@tesolutions.pe</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-sm text-center text-slate-400">
          <p>© {new Date().getFullYear()} TE Solutions Perú. Todos los derechos reservados. Especialistas en Energía y Potencia.</p>
        </div>
      </div>
    </footer>
  );
}
