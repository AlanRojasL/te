import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, ChevronRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Nueva actualización de la NTCSE impacta a Clientes Libres",
    date: "12 May, 2026",
    category: "Regulación",
  },
  {
    id: 2,
    title: "Schneider Electric lanza la nueva generación de medidores ION9000",
    date: "28 Abr, 2026",
    category: "Tecnología",
  },
  {
    id: 3,
    title: "TE Solutions implementa PME en minera del sur",
    date: "15 Abr, 2026",
    category: "Casos de Éxito",
  },
  {
    id: 4,
    title: "Impacto del fenómeno El Niño en los precios spot del SEIN",
    date: "02 Mar, 2026",
    category: "Mercado",
  }
];

export function NewsSidebar() {
  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-6">
        <Newspaper className="h-6 w-6 text-[#003b70]" />
        <h2 className="text-3xl font-bold text-slate-900">Noticias del Sector</h2>
      </div>
      
      <Card className="border-none shadow-xl bg-gradient-to-br from-[#003b70] to-slate-900 text-white rounded-2xl overflow-hidden">
        <CardHeader className="border-b border-white/10 pb-4">
          <CardTitle className="text-xl font-medium tracking-wide">Últimas Actualizaciones</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y divide-white/10">
            {newsItems.map((item) => (
              <li key={item.id} className="group hover:bg-white/5 transition-colors">
                <Link href="#" className="flex items-start p-5">
                  <div className="flex-1 space-y-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {item.date}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors mt-2" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-white/10 text-center">
            <Link href="#" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">
              Ver todas las noticias
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
