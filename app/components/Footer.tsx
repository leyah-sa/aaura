export default function Footer() {
  return (
    <footer className="w-full border-t mt-24">
      <div className="max-w-6xl mx-auto px-8 py-8 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} Aaura. All rights reserved.</span>
        <span>Built with discipline & engineering.</span>
      </div>
    </footer>
  )
}