import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { getAllPosts, getPostPathBySlug } from "@/lib/blog"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filePath = getPostPathBySlug(slug)

  if (!fs.existsSync(filePath)) return notFound()

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)

  return (
    <main className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-500 mt-3">{data.date}</p>
      <div className="prose prose-neutral mt-10">
        {/* Pour l’instant on affiche le markdown brut en texte */}
        <pre className="whitespace-pre-wrap">{content}</pre>
      </div>
    </main>
  )
}