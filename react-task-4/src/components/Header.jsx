export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-900 to-red-700 text-white py-4 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My React App</h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
