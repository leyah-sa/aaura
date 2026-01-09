import Link from "next/link"
import Reveal from "./components/Reveal"
import GlassTiltCard from "./components/GlassTiltCard"

export default function Home() {
  return (
    <main className="px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* HERO */}
        <Reveal>
          <div className="glass p-10">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-500">
              <span className="accent-text">Aaura</span>
              <span>•</span>
              <span>High-signal systems designed to elevate your day-to-day</span>
            </div>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-900">
              AAURA
            </h1>

            <p className="mt-4 text-neutral-700 text-lg max-w-2xl">
              Entertain a lifestyle that complements you in every layer
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition"
              >
                Explore the blog
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition"
              >
                About AAURA
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-600 hover:bg-neutral-50 transition"
              >
                Contact
              </Link>
            </div>

            {/* Quick value bullets */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-white/40 px-5 py-4">
                <p className="text-sm font-medium text-neutral-900">Editorial depth</p>
                <p className="mt-1 text-sm text-neutral-600">
                  Long-form articles, not surface-level tips.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white/40 px-5 py-4">
                <p className="text-sm font-medium text-neutral-900">Discipluxury</p>
                <p className="mt-1 text-sm text-neutral-600">
                  Routines with standards and structure.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white/40 px-5 py-4">
                <p className="text-sm font-medium text-neutral-900">High-signal systems</p>
                <p className="mt-1 text-sm text-neutral-600">
                  Minimal, repeatable frameworks.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <Link href="/blog" className="block">
              <GlassTiltCard>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Editorial Blog
                  </h2>
                  <span className="text-neutral-400">→</span>
                </div>
                <p className="mt-2 text-neutral-600 text-sm">
                  Long-form insights, aesthetic routines, and high-signal strategy.
                </p>
                <p className="mt-4 text-xs text-neutral-500">
                  Read latest articles
                </p>
              </GlassTiltCard>
            </Link>
          </Reveal>

          <Reveal>
            <Link href="/blog" className="block">
              <GlassTiltCard>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Luxury Systems
                  </h2>
                  <span className="text-neutral-400">→</span>
                </div>
                <p className="mt-2 text-neutral-600 text-sm">
                  Minimalism, structure, and repeatable frameworks — designed to scale.
                </p>
                <p className="mt-4 text-xs text-neutral-500">
                  Explore systems posts
                </p>
              </GlassTiltCard>
            </Link>
          </Reveal>

          <Reveal>
            <Link href="/blog" className="block">
              <GlassTiltCard>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Pinterest → Conversion
                  </h2>
                  <span className="text-neutral-400">→</span>
                </div>
                <p className="mt-2 text-neutral-600 text-sm">
                  Content designed to drive traffic and monetization — clean, not spammy.
                </p>
                <p className="mt-4 text-xs text-neutral-500">
                  Learn the pipeline
                </p>
              </GlassTiltCard>
            </Link>
          </Reveal>
        </div>

        {/* CTA STRIP */}
        <Reveal>
          <div className="glass p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Build your routine like a system.
              </h3>
              <p className="mt-2 text-neutral-600 text-sm max-w-xl">
                Draft: upcoming resources (templates, checklists, mini-guides) designed
                for consistency — with a luxury, editorial experience.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/blog"
                className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition"
              >
                Browse articles
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}