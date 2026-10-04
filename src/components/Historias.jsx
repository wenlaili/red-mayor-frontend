const historias = [
  {
    texto: "Antes me daba miedo pedir ayuda para ir al consultorio. Ahora sé que puedo llamar y alguien de confianza viene a acompañarme.",
    nombre: "— María, 78 años",
    comuna: "Vecina de la comuna de Providencia",
  },
  {
    texto: "Un voluntario me ayudó a arreglar la llave del baño en media hora. Fue puntual, amable y me mostró su credencial municipal.",
    nombre: "— Juan, 82 años",
    comuna: "Vecino de la comuna de Ñuñoa",
  },
];

export default function Historias() {
  return (
    <section className="bg-verde-oscuro px-8 py-16">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-3xl font-bold text-white">
          Historias de nuestra red
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {historias.map((historia) => (
            <article
              key={historia.nombre}
              className="rounded-2xl border border-white/15 bg-white/5 p-7 text-[#EAF2EA]"
            >
              <p>{historia.texto}</p>
              <strong className="mt-3 block text-white">{historia.nombre}</strong>
              <p>{historia.comuna}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}