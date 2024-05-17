## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## JSON-SERVER
`json-server --watch db.json` 


## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

### CONCLUSIONES
- Astro es un framework de desarrollo web que se enfoca en la creación de sitios web estáticos y dinámicos.
- Se enruta por archivo.
- Permite la implementación de rutas dinámicas con la función "getStaticPaths".
- Obtener y pasar props con la función getStaticProps.
- Astro utiliza una arquitectura de plugins para agregar funcionalidades adicionales.
- Se puede consumir un archivo json desde una url externa, siempre y cuando esté ubicado en la carpeta public, dentro del repositorio que lo aloja.
- Permite consumir un archivo json alojado en el mismo repositorio, al importar el archivo en el componente o función.
- Se puede utilizar json-server para crear un servidor json fake.
- Permite utilizar diferentes frameworks de frontend como React, Vue, Svelte, etc.
- Astro tiene una comunidad activa y una documentación detallada.
- Es ideal para proyectos que requieren una alta velocidad y escalabilidad.
- Es compatible con diferentes tipos de bases de datos.
- Es compatible con diferentes frameworks de testing, autenticación y autorización, internacionalización, SEO, analytics, marketing automation.
- Las “View Transitions” en Astro son una característica que permite transiciones de vista suaves y animadas entre las páginas.Proporciona un enrutador ligero del lado del cliente que intercepta la navegación y le permite personalizar la transición entre páginas.
