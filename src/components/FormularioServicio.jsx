import { useState } from "react";

function FormularioServicio() {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [servicio, setServicio] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    function cambiarNombre(event) {
        setNombre(event.target.value);
    }

    function cambiarTelefono(event) {
        setTelefono(event.target.value);
    }

    function cambiarServicio(event) {
        setServicio(event.target.value);
    }

    function cambiarMensaje(event) {
        setMensaje(event.target.value);
    }

    function enviarFormulario(event) {

        event.preventDefault();

        setEnviado(true);

    }

    return (

        <section className="formulario-servicios">

            <h2>
                ¿Necesitas alguno de estos servicios?
            </h2>

            <p>
                Completa este formulario para contarnos qué tipo
                de ayuda necesitas.
            </p>

            <form onSubmit={enviarFormulario}>

                <label htmlFor="nombre">
                    Nombre completo
                </label>

                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={cambiarNombre}
                    placeholder="Ingrese su nombre"
                    required
                />

                <label htmlFor="telefono">
                    Número de teléfono
                </label>

                <input
                    type="tel"
                    id="telefono"
                    value={telefono}
                    onChange={cambiarTelefono}
                    placeholder="Ejemplo: 912345678"
                    required
                />

                <label htmlFor="servicio">
                    Tipo de ayuda
                </label>

                <select
                    id="servicio"
                    value={servicio}
                    onChange={cambiarServicio}
                    required
                >

                    <option value="">
                        Seleccione una opción
                    </option>

                    <option value="Compras">
                        Compras
                    </option>

                    <option value="Medicamentos">
                        Medicamentos
                    </option>

                    <option value="Trámites">
                        Trámites
                    </option>

                    <option value="Acompañamiento">
                        Acompañamiento
                    </option>

                    <option value="Reparaciones">
                        Reparaciones
                    </option>

                    <option value="Actividades">
                        Actividades
                    </option>

                </select>

                <label htmlFor="mensaje">
                    Cuéntanos qué necesitas
                </label>

                <textarea
                    id="mensaje"
                    rows="5"
                    value={mensaje}
                    onChange={cambiarMensaje}
                    placeholder="Escriba aquí su solicitud"
                    required
                />

                <button type="submit" className="boton-enviar">
                    Enviar solicitud
                </button>

            </form>

            {enviado &&

                <div className="resultado-formulario">

                    <h3>
                        Solicitud recibida
                    </h3>

                    <p>
                        <strong>Nombre: </strong>
                        {nombre}
                    </p>

                    <p>
                        <strong>Teléfono: </strong>
                        {telefono}
                    </p>

                    <p>
                        <strong>Servicio: </strong>
                        {servicio}
                    </p>

                    <p>
                        <strong>Solicitud: </strong>
                        {mensaje}
                    </p>

                </div>

            }

        </section>

    );

}

export default FormularioServicio;