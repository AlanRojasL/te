import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: `${post.title} | TE Solutions Perú`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-32">
      {/* Article Header with Image */}
      <div className="w-full h-[50vh] min-h-[400px] max-h-[600px] relative bg-[#003b70]">
        {post.image && (
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-[#003b70]/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <Link href="/actualidad" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors text-base font-bold">
              <ArrowLeft className="mr-2 h-5 w-5" /> Volver a Noticias
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-5xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-slate-300 mt-6 gap-3 text-lg font-medium">
              <Calendar className="h-5 w-5 text-green-500" />
              <span>{new Date(post.date).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto prose prose-slate prose-xl prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#003b70] hover:prose-a:text-blue-700 prose-img:rounded-2xl prose-img:shadow-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
