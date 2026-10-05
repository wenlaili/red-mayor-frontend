import { useState } from "react";
import logoIcono from "../assets/logo-icono.png";

export default function Header({ cambiarVista }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="border-b border-borde bg-crema px-8 py-4">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5 text-2xl font-bold text-verde-oscuro">
          <img
            src={logoIcono}
            alt="Logo Red Mayor"
            className="h-12 w-auto"
          />

          <span>Red Mayor</span>
        </div>


        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-borde text-xl md:hidden"
          aria-label="Abrir menú"
        >
          ☰
        </button>


        {/* Navegación */}
        <nav
          className={`${
            menuAbierto ? "flex" : "hidden"
          } w-full flex-col gap-3 pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-10 md:pt-0`}
        >

          <a
            href="#inicio"
            onClick={() => {
              setMenuAbierto(false);
              cambiarVista("inicio");
            }}
            className="py-2 font-semibold text-texto transition-colors hover:text-verde md:py-0"
          >
            Inicio
          </a>


          <a
            href="#servicios"
            onClick={() => {
              setMenuAbierto(false);
              cambiarVista("servicios");
            }}
            className="py-2 font-semibold text-texto transition-colors hover:text-verde md:py-0"
          >
            Servicios
          </a>


          <a
            href="#como-funciona"
            onClick={() => setMenuAbierto(false)}
            className="py-2 font-semibold text-texto transition-colors hover:text-verde md:py-0"
          >
            ¿Cómo Funciona?
          </a>


          <a
            href="#formulario"
            onClick={() => setMenuAbierto(false)}
            className="py-2 font-semibold text-texto transition-colors hover:text-verde md:py-0"
          >
            Solicitar ayuda
          </a>


          <a
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
            className="py-2 font-semibold text-texto transition-colors hover:text-verde md:py-0"
          >
            Contacto
          </a>

        </nav>


        {/* Botón de llamada */}
        <a
          href="tel:800123456"
          className="mt-4 inline-flex items-center rounded-full bg-rust px-5 py-3 font-bold text-white transition-opacity hover:opacity-90 md:mt-0"
        >
          Llámanos: 800 123 456
        </a>

      </div>
    </header>
  );
}