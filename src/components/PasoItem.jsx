
export default function PasoItem({ numero, titulo, texto }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-verde font-bold text-white">
        {numero}
      </div>
      <div>
        <h3 className="font-semibold text-verde-oscuro">{titulo}</h3>
        <p className="text-texto">{texto}</p>
      </div>
    </div>
  );
}