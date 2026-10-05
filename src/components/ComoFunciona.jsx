import comoFuncionaImg from "../assets/image2.png";
import PasoItem from "./PasoItem";

const pasos = [
  {
    numero: 1,
    titulo: "Pide tu ayuda",
    texto: "Completa el formulario web o llama a nuestra línea telefónica.",
  },
  {
    numero: 2,
    titulo: "Coordinamos un voluntario",
    texto: "Un coordinador municipal asigna a la persona más cercana y verificada.",
  },
  {
    numero: 3,
    titulo: "Recibe el apoyo",
    texto: "Ayuda gratuita y confiable, en tu domicilio o donde la necesites.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="mx-auto max-w-[1180px] px-8 py-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <img
            src={comoFuncionaImg}
            alt="Una señora mayor sonríe mientras usa su teléfono celular en su hogar"
            className="rounded-3xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-verde-oscuro">
            Pedir ayuda toma tres pasos
          </h2>
          <p className="mt-3 text-texto">
            Así de simple es recibir apoyo, ya sea por internet o por teléfono.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {pasos.map((paso) => (
              <PasoItem
                key={paso.numero}
                numero={paso.numero}
                titulo={paso.titulo}
                texto={paso.texto}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}