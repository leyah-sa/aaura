import Reveal from "./components/Reveal"
import GlassTiltCard from "./components/GlassTiltCard"

export default function Home() {
  return (
    <main className="px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <Reveal>
          <div className="glass p-10">
            <h1 className="text-5xl font-semibold tracking-tight">Aaura</h1>
            <p className="mt-4 text-white/70 text-lg max-w-2xl">
              Beauty, discipline & engineering — crafted into an editorial, luxurious experience.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium">
                Explore the blog
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 hover:bg-white/5">
                About Aaura
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <GlassTiltCard>
              <h2 className="text-lg font-semibold">Editorial Blog</h2>
              <p className="mt-2 text-white/70 text-sm">
                Long-form insights, aesthetic routines, and high-signal strategy.
              </p>
            </GlassTiltCard>
          </Reveal>

          <Reveal>
            <GlassTiltCard>
              <h2 className="text-lg font-semibold">Luxury Systems</h2>
              <p className="mt-2 text-white/70 text-sm">
                Minimalism, structure, and repeatable frameworks — no chaos.
              </p>
            </GlassTiltCard>
          </Reveal>

          <Reveal>
            <GlassTiltCard>
              <h2 className="text-lg font-semibold">Pinterest → Conversion</h2>
              <p className="mt-2 text-white/70 text-sm">
                Content designed to drive traffic and monetization (clean, not spammy).
              </p>
            </GlassTiltCard>
          </Reveal>
        </div>
      </div>
    </main>
  )
}