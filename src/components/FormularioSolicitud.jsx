import { useState } from "react";

export default function FormularioSolicitud() {
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    direccion: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="formulario" className="mx-auto max-w-[700px] px-8 py-16">
      <h2 className="text-3xl font-bold text-verde-oscuro">Solicita tu ayuda</h2>
      <p className="mt-2 text-texto">
        Completa este formulario y un coordinador de tu zona se pondrá en
        contacto contigo.
      </p>

      <form onSubmit={manejarEnvio} className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="font-semibold text-verde-oscuro">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datos.nombre}
            onChange={manejarCambio}
            required
            className="rounded-lg border border-borde px-3.5 py-3 text-base"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefono" className="font-semibold text-verde-oscuro">
            Teléfono de contacto
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={datos.telefono}
            onChange={manejarCambio}
            required
            className="rounded-lg border border-borde px-3.5 py-3 text-base"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="servicio" className="font-semibold text-verde-oscuro">
            Tipo de ayuda que necesitas
          </label>
          <select
            id="servicio"
            name="servicio"
            value={datos.servicio}
            onChange={manejarCambio}
            required
            className="rounded-lg border border-borde px-3.5 py-3 text-base"
          >
            <option value="">Selecciona una opción</option>
            <option value="Compras">Compras</option>
            <option value="Medicamentos">Medicamentos</option>
            <option value="Trámites">Trámites</option>
            <option value="Acompañamiento">Acompañamiento</option>
            <option value="Reparaciones">Reparaciones</option>
            <option value="Actividades">Actividades</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="direccion" className="font-semibold text-verde-oscuro">
            Dirección o sector
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={datos.direccion}
            onChange={manejarCambio}
            required
            className="rounded-lg border border-borde px-3.5 py-3 text-base"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="mensaje" className="font-semibold text-verde-oscuro">
            Cuéntanos más sobre tu solicitud
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={datos.mensaje}
            onChange={manejarCambio}
            className="rounded-lg border border-borde px-3.5 py-3 text-base"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-verde px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
        >
          Enviar solicitud
        </button>
      </form>

      {enviado && (
        <div className="mt-8 rounded-2xl border border-verde bg-verde-suave p-6">
          <h3 className="font-bold text-verde-oscuro">¡Solicitud recibida!</h3>
          <ul className="mt-2 space-y-1">
            <li><strong>Nombre:</strong> {datos.nombre}</li>
            <li><strong>Teléfono:</strong> {datos.telefono}</li>
            <li><strong>Tipo de ayuda:</strong> {datos.servicio}</li>
            <li><strong>Dirección:</strong> {datos.direccion}</li>
            <li><strong>Mensaje:</strong> {datos.mensaje || "Sin comentarios adicionales"}</li>
          </ul>
        </div>
      )}
    </section>
  );
}