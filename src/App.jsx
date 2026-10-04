import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ComoFunciona from "./components/ComoFunciona";
import Historias from "./components/Historias";
import BannerAyuda from "./components/BannerAyuda";
import FormularioSolicitud from "./components/FormularioSolicitud";


export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-crema">
      <Header />
      <main className="flex-1">
        <Hero />
        <ComoFunciona />
        <Historias />
        <FormularioSolicitud />
        <BannerAyuda />
      </main>
      <Footer />
    </div>
  );
}