export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-beige shadow z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <h1 className="text-2xl font-serif font-bold text-darkGreen">Ramlah Salman</h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#about" className="hover:text-mustard">About</a></li>
          <li><a href="#education" className="hover:text-mustard">Education</a></li>
          <li><a href="#services" className="hover:text-mustard">Services</a></li>
          <li><a href="#projects" className="hover:text-mustard">Projects</a></li>
          <li><a href="#skills" className="hover:text-mustard">Skills</a></li>
          <li><a href="#contact" className="hover:text-mustard">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
