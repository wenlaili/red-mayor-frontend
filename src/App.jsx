import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import ComoFunciona from "./components/ComoFunciona";
import Historias from "./components/Historias";
import FormularioSolicitud from "./components/FormularioSolicitud";
import BannerAyuda from "./components/BannerAyuda";

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

        {vistaActual === "inicio" && (
          <>
            <Hero />
            <ComoFunciona />
            <Historias />
            <FormularioSolicitud />
            <BannerAyuda />
          </>
        )}

        {vistaActual === "servicios" && (
          <Servicios />
        )}

      </main>

      <Footer />

    </div>
  );
}