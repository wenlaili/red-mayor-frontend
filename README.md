# Red Mayor — Frontend

Plataforma web de ayuda comunitaria para personas adultas mayores. Permite a usuarios conocer los servicios disponibles, solicitar apoyo de voluntarios coordinados municipalmente y contactar a la red de manera simple y accesible.

---

## Tecnologías utilizadas

- [React](https://react.dev/) con Vite
- [Tailwind CSS](https://tailwindcss.com/) — pantalla de inicio
- CSS — pantalla de servicios
- JSX

---

## Estructura del proyecto

```
red-mayor-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ComoFunciona.jsx
│   │   ├── PasoItem.jsx
│   │   ├── Historias.jsx
│   │   ├── FormularioSolicitud.jsx
│   │   ├── BannerAyuda.jsx
│   │   ├── Footer.jsx
│   │   ├── TarjetaServicio.jsx
│   │   └── FormularioServicio.jsx
│   ├── pages/
│   │   ├── Servicios.jsx
│   │   └── Servicios.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## Instalación y ejecución

### Requisitos previos

- Node.js 18 o superior
- npm

### Pasos

1. Clona el repositorio:

```bash
git clone https://github.com/wenlaili/red-mayor-frontend.git
cd red-mayor-frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre el navegador en `http://localhost:5173`

---

## Pantallas desarrolladas

### Pantalla de Inicio
Desarrollada con React y Tailwind CSS. Incluye:
- **Header** con navegación y menú hamburguesa para móvil
- **Hero** con llamados a la acción
- **Cómo Funciona** con pasos reutilizables mediante props
- **Historias** de usuarios de la red
- **Formulario de solicitud** con manejo de estado y confirmación de envío
- **Banner de contacto** con enlace directo a llamada telefónica
- **Footer** con navegación, canales de atención y copyright dinámico

### Pantalla de Servicios
Desarrollada con React y CSS. Incluye:
- **Cabecera** descriptiva de los servicios
- **Tarjetas de servicio** reutilizables con toggle "Ver más / Ver menos"
- **Formulario de solicitud** de servicio específico
- **Sección de ayuda telefónica**

---

## Funcionalidades interactivas

- Menú hamburguesa en móvil (`useState`)
- Formulario de inicio con confirmación de datos (`useState`)
- Tarjetas de servicios con información expandible (`useState`)
- Formulario de servicios con confirmación de datos (`useState`)
- Navegación entre pantallas (`useState` en App.jsx)

---

## Diseño responsivo

La interfaz está optimizada para:
- Teléfonos móviles (desde 375px)
- Tabletas
- Escritorio (hasta 1180px de contenido)

---

## Autores

- WEN LAi LI — Pantalla de inicio
- NICOLÁS BAEZ — Pantalla de servicios

Proyecto académico — 2026
