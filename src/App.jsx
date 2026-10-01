import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-crema">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}