export default function BannerAyuda() {
  return (
    <section id="contacto" className="mx-auto max-w-[1180px] px-8 py-8">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border-2 border-dashed border-verde-suave bg-white p-9">
        <div>
          <h2 className="text-2xl font-bold text-verde-oscuro">
            ¿No sabes qué tipo de ayuda necesitas?
          </h2>
          <p className="mt-1 text-texto">
            Llámanos al 800 123 456 y te orientamos sin costo.
          </p>
        </div>

        <a
          href="tel:800123456"
          className="inline-flex items-center justify-center rounded-full bg-rust px-5 py-3 font-bold text-white transition-opacity hover:opacity-90 w-full md:w-auto"
        >
          Llamar ahora
        </a>
      </div>
    </section>
  );
}