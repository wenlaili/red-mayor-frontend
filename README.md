# Red Mayor — Frontend

Plataforma web de ayuda comunitaria para personas adultas mayores. Permite a usuarios solicitar apoyo de voluntarios coordinados municipalmente, conocer los servicios disponibles y contactar a la red de manera simple y accesible.

---

## Tecnologías utilizadas

- [React](https://react.dev/) con Vite
- [Tailwind CSS](https://tailwindcss.com/)
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
│   │   └── Footer.jsx
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

## Funcionalidades implementadas

- **Navegación** con menú responsive y menú hamburguesa en móvil
- **Hero** con llamados a la acción
- **Sección Cómo Funciona** con pasos reutilizables mediante props
- **Historias** de usuarios de la red
- **Formulario de solicitud** con manejo de estado (`useState`) y confirmación de envío
- **Banner de contacto** con enlace directo a llamada telefónica
- **Footer** con navegación, canales de atención y copyright dinámico

---

## Diseño responsivo

La interfaz está optimizada para:
- Teléfonos móviles (desde 375px)
- Escritorio (hasta 1180px de contenido)

---

## Autores

- WEN LAi LI 
- NICOLÁS BAEZ 

Proyecto académico — 2026
