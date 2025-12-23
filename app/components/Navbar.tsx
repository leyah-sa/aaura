import Image from "next/image"

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Aaura logo"
            width={40}
            height={40}
          />
          <span className="font-semibold text-lg">Aaura</span>
        </div>

        {/* NAV LINKS */}
        <ul className="flex gap-6 text-sm text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  )
}