import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/actualidad");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  // Ensure the directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Sin título",
        date: data.date || "Sin fecha",
        excerpt: data.excerpt || "",
        image: data.image || "",
      };
    });

  // Sort posts by date
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    
    // Check if .md file exists, if not check .mdx
    let actualPath = fullPath;
    if (!fs.existsSync(actualPath)) {
      actualPath = path.join(contentDirectory, `${slug}.mdx`);
      if (!fs.existsSync(actualPath)) return null;
    }

    const fileContents = fs.readFileSync(actualPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Sin título",
      date: data.date || "Sin fecha",
      excerpt: data.excerpt || "",
      image: data.image || "",
      content,
    };
  } catch (error) {
    console.error("Error reading post:", error);
    return null;
  }
}
