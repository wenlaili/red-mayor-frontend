import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-[1180px] px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Columna de texto */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-3xl font-extrabold leading-tight text-verde-oscuro sm:text-4xl lg:text-5xl">
            Cerca de ti para cuidarte <br className="hidden sm:inline" />y
            acompañarte.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-texto">
            En Red Mayor, creamos una red de apoyo para que vivas con dignidad,
            compañía y bienestar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="inline-block rounded-full bg-verde px-7 py-3.5 font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Ver Servicios de ayuda
            </a>
            <a
              href="#formulario"
              className="inline-block rounded-full border-2 border-verde-oscuro bg-transparent px-7 py-3.5 font-semibold text-verde-oscuro transition hover:bg-verde-oscuro hover:text-white"
            >
              ¿Cómo podemos ayudarte?
            </a>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Apoyo a personas mayores"
            className="w-full max-w-md rounded-3xl object-cover shadow-md md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
