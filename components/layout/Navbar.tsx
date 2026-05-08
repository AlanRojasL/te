import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              {/* Schneider Electric / Industrial style typography */}
              <span className="text-3xl font-extrabold tracking-tighter text-[#003b70]">
                TE Solutions
              </span>
              <span className="text-2xl font-bold text-green-500">Perú</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-semibold text-[#003b70]">
            <Link href="/" className="transition-colors hover:text-green-600">
              Inicio
            </Link>
            <Link href="/plataforma-pme" className="transition-colors hover:text-green-600">
              Plataforma PME
            </Link>
            <Link href="/medidores-ion" className="transition-colors hover:text-green-600">
              Medidores ION
            </Link>
            <Link href="/actualidad" className="transition-colors hover:text-green-600">
              Actualidad
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 h-12 text-base">Contactar Soporte</Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-[#003b70]">
              <Menu className="h-7 w-7" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
