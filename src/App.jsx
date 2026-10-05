import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Servicios from "./pages/Servicios";

export default function App() {

  const [vistaActual, setVistaActual] = useState("inicio");

  function cambiarVista(vista) {
    setVistaActual(vista);
  }

  return (
    <div className="flex min-h-screen flex-col bg-crema">

      <Header cambiarVista={cambiarVista} />

      <main className="flex-1">

        {vistaActual === "inicio" && <Hero />}

        {vistaActual === "servicios" && <Servicios />}

      </main>

      <Footer />

    </div>
  );
}