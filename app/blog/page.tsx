import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="space-y-8">
        {posts.map((p) => (
          <article key={p.slug} className="border-b pb-6">
            <Link href={`/blog/${p.slug}`} className="block">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <p className="text-gray-600 mt-2">{p.description}</p>
              <p className="text-sm text-gray-500 mt-3">{p.date}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}