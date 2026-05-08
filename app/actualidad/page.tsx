import { getAllPosts } from "@/lib/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Actualidad Energética | TE Solutions Perú",
  description: "Noticias, tendencias regulatorias y casos de éxito en la gestión y calidad de energía en Perú (NTCSE).",
};

export default function ActualidadPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-32">
      {/* Header */}
      <section className="bg-[#003b70] py-32 text-white relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#003b70]/90 to-slate-900/90 z-10" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Actualidad Energética
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              Mantente al día con las últimas tendencias regulatorias (NTCSE), avances tecnológicos y casos de éxito en la gestión de potencia industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {posts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-xl font-medium">No hay publicaciones disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link key={post.slug} href={`/actualidad/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                    {post.image ? (
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400">
                        Imagen no disponible
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center text-slate-500 text-sm mb-4 gap-2 font-medium">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#003b70] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-lg text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 text-green-600 text-base font-bold flex items-center group-hover:text-green-500 transition-colors">
                      Leer artículo completo <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
