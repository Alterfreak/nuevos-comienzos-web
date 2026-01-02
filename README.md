# Nuevos Comienzos Web

Sitio web de la Iglesia del Nazareno Nuevos Comienzos, migrado a Next.js (App Router) con TypeScript y styled-components.

## Scripts

- `yarn dev`: entorno de desarrollo en `http://localhost:3000`
- `yarn build`: build de producción
- `yarn start`: levantar build
- `yarn typecheck`: TypeScript sin emitir
- `yarn lint`: ESLint + Prettier + typecheck

## Notas

- Los assets estáticos viven en `public/`.
- Las rutas API de formularios guardan datos en `data/registrations.json` y `data/contact.json` (almacenamiento simple por archivo).
