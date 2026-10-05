import TarjetaServicio from "../components/TarjetaServicio";
import FormularioServicio from "../components/FormularioServicio";

import "./Servicios.css";

function Servicios() {

    return (

        <main className="pagina-servicios">

            <section className="cabecera-servicios">

                <p className="texto-pequeno">
                    Estamos para ayudarte
                </p>

                <h1>
                    Servicios de apoyo
                </h1>

                <p>
                    Elige el tipo de ayuda que necesitas.
                    Estamos para apoyarte de manera sencilla,
                    segura y cercana.
                </p>

            </section>


            <section className="contenedor-servicios">

                <TarjetaServicio
                    icono="🛒"
                    titulo="Compras"
                    descripcion="Te ayudamos con la compra de alimentos y productos necesarios para tu hogar."
                    informacion="Un voluntario puede ayudarte con alimentos, artículos de aseo y otros productos esenciales."
                    color="borde-verde"
                />

                <TarjetaServicio
                    icono="💊"
                    titulo="Medicamentos"
                    descripcion="Podemos ayudarte con el retiro de tus medicamentos."
                    informacion="Podemos retirar medicamentos en farmacias o centros de salud y llevarlos hasta tu hogar."
                    color="borde-rojo"
                />

                <TarjetaServicio
                    icono="📄"
                    titulo="Trámites"
                    descripcion="Recibe orientación y apoyo para realizar diferentes trámites."
                    informacion="Podemos ayudarte con trámites municipales, pagos de cuentas y otras gestiones importantes."
                    color="borde-azul"
                />

                <TarjetaServicio
                    icono="🤝"
                    titulo="Acompañamiento"
                    descripcion="Si necesitas compañía, contamos con personas disponibles para apoyarte."
                    informacion="Puedes recibir compañía para visitas, paseos, conversaciones y actividades cotidianas."
                    color="borde-amarillo"
                />

                <TarjetaServicio
                    icono="🔧"
                    titulo="Reparaciones"
                    descripcion="Recibe ayuda con pequeños problemas dentro de tu hogar."
                    informacion="Podemos ayudarte con arreglos sencillos como ampolletas, grifos y cerraduras."
                    color="borde-naranja"
                />

                <TarjetaServicio
                    icono="🎨"
                    titulo="Actividades"
                    descripcion="Participa en actividades recreativas y sociales junto a otras personas."
                    informacion="Puedes participar en talleres, gimnasia suave y encuentros comunitarios."
                    color="borde-morado"
                />

            </section>


            <FormularioServicio />


            <section className="ayuda-telefonica">

                <div>

                    <h2>
                        ¿Prefieres hablar con alguien?
                    </h2>

                    <p>
                        Llámanos y te ayudaremos a encontrar
                        el servicio que necesitas.
                    </p>

                </div>

                <a href="tel:800123456">
                    Llamar ahora
                </a>

            </section>

        </main>

    );

}

export default Servicios;