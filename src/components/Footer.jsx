export default function Footer() {
  return (
    <footer className="mt-16 bg-verde-oscuro px-8 pt-14 pb-8 text-[#CFE1D0]">
      <div className="mx-auto max-w-[1180px]">
        {/* Contenido en 3 columnas */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Columna 1: Identidad */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <span>Red Mayor</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              Iniciativa municipal que conecta a personas adultas mayores con
              voluntarios y coordinadores comunitarios acreditados, para una
              vejez acompañada y digna.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navegación</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="transition-colors hover:text-white"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="transition-colors hover:text-white"
                >
                  Servicios de ayuda
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="transition-colors hover:text-white"
                >
                  ¿Cómo funciona?
                </a>
              </li>
              <li>
                <a
                  href="#formulario"
                  className="transition-colors hover:text-white"
                >
                  Solicitar voluntario
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Atención y emergencia */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Canales de atención
            </h3>
            <p className="mt-3 text-sm">Línea gratuita de asistencia:</p>
            <a
              href="tel:800123456"
              className="mt-1 inline-block text-xl font-bold text-white transition-opacity hover:opacity-80"
            >
              800 123 456
            </a>
            <p className="mt-2 text-xs text-[#a3c2a6]">
              Lunes a domingo, de 08:00 a 20:00 hrs.
            </p>
            <p className="mt-1 text-xs text-[#a3c2a6]">
              Atención presencial en oficinas comunitarias de la comuna.
            </p>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-[#a3c2a6] md:flex md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Red Mayor. Proyecto de apoyo
            comunitario.
          </p>
        </div>
      </div>
    </footer>
  );
}
