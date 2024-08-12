import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-green-200">PlantID</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-green-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-200">About</Link></li>
            <li><Link href="/contact" className="hover:text-green-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}