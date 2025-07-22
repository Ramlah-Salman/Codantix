export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md text-white shadow-xl z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Codantix</h1>
        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li><a href="#hero" className="hover:text-white hover:underline">Home</a></li>
          <li><a href="#services" className="hover:text-white hover:underline">Services</a></li>
          <li><a href="#contact" className="hover:text-white hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
