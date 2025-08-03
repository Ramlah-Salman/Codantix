export default function Navbar() {
  return (
    <nav className="bg-[#e2ccb3] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Left: Logo/Title */}
        <h1 className="text-[#1f1f1f] text-2xl font-extrabold tracking-wide">
          My Portfolio
        </h1>

        {/* Right: Navigation Links */}
        <ul className="flex gap-10 text-[#1f1f1f] font-semibold text-md">
          <li>
            <a
              href="#hero"
              className="hover:text-[#880e0e] transition duration-200"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-[#880e0e] transition duration-200"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#880e0e] transition duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-[#880e0e] transition duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#880e0e] transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
