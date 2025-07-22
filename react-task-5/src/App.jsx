import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-poppins scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
