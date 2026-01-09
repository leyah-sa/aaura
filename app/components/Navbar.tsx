import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="glass rounded-none border-x-0 border-t-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Aaura logo" width={40} height={40} />
          <span className="font-semibold text-lg">Aaura</span>
        </Link>

        <ul className="flex gap-6 text-sm text-neutral-800">
          <li>
            <Link href="/" className="hover:text-neutral-900 transition">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-neutral-900 transition">Blog</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-neutral-900 transition">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-neutral-900 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}