import { useState } from "react";

function TarjetaServicio(props) {

    const [mostrar, setMostrar] = useState(false);

    function cambiarInformacion() {

        if (mostrar == true) {
            setMostrar(false);
        } else {
            setMostrar(true);
        }

    }

    var textoBoton = "Ver más";

    if (mostrar == true) {
        textoBoton = "Ver menos";
    }

    return (

        <div className={"servicio-card " + props.color}>

            <div className="servicio-icono">
                {props.icono}
            </div>

            <h2>
                {props.titulo}
            </h2>

            <p>
                {props.descripcion}
            </p>

            <button onClick={cambiarInformacion}>
                {textoBoton}
            </button>

            {mostrar &&

                <div className="informacion-extra">

                    <p>
                        {props.informacion}
                    </p>

                </div>

            }

        </div>

    );

}

export default TarjetaServicio;