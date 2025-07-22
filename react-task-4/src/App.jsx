import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-red-900 mb-6">Welcome to My React App</h2>
        <Button text="Click Me" />
      </main>

      <Footer />
    </div>
  );
}
