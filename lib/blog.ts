import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "")
    const fullPath = path.join(BLOG_DIR, file)
    const raw = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(raw)

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      tags: data.tags ?? [],
    } as BlogPost
  })

  // tri du plus récent au plus ancien (si date valide)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}

export function getPostPathBySlug(slug: string) {
  return path.join(BLOG_DIR, `${slug}.mdx`)
}