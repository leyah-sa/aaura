import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getPostPathBySlug } from "@/lib/blog"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const filePath = getPostPathBySlug(params.slug)

  if (!fs.existsSync(filePath)) return notFound()

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)

  return (
    <main className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-10">{data.date}</p>

      <article className="prose prose-neutral max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  )
}