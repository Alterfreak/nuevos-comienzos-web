# Guia de reutilizacion del proyecto Alterfreak Auth Hub

Este documento describe la estructura, librerias y decisiones clave del proyecto para que otro agente pueda replicarlo en un nuevo repo sin perder el flujo de autenticacion multi-tenant.

## 1) Objetivo del proyecto
- Servir un "auth hub" centralizado con Better Auth para multiples tenants.
- Exponer una UI de login/registro y emitir un login ticket de un solo uso para apps en otros dominios.
- Proveer un SDK liviano para construir URLs de login y canjear tickets.

## 2) Stack y librerias principales
- Framework: Next.js 15.1 (App Router) + React 19 + TypeScript 5.5.
- Auth: `better-auth` con `mongodb` adapter y plugin `nextCookies`.
- UI: Tailwind CSS + shadcn-style components (`src/components/ui`) + Radix UI.
- Utilidades UI: `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`.
- SDK/crypto: `jose` para JWT en helpers Next.js.
- Tooling: ESLint + Prettier, Vitest para tests.

## 3) Estructura de carpetas (lo que hay que copiar)
```
src/
  app/
    api/auth/[...all]/route.ts        # Handler de Better Auth
    api/tickets/issue/route.ts         # Emite login ticket
    api/tickets/exchange/route.ts      # Canjea ticket por sesion/usuario
    auth/page.tsx                      # Alias de la pagina principal
    auth/callback/route.ts             # Callback central para social login
    tenant-not-found/page.tsx          # Fallback 404
    components/tenant-not-found.tsx    # Vista de error de tenant
    globals.css                        # Tokens visuales y estilos base
    layout.tsx                         # Fuentes y layout base
    page.tsx                           # UI principal del hub
  components/
    login-form.tsx                     # UI + flujo de login + issue ticket
    ui/                                # Botones, inputs, tabs, etc
  lib/
    auth.ts                            # Instancia Better Auth
    auth-client.ts                     # Cliente Better Auth (browser/server)
    clients.ts                         # Validacion clientId/secret
    env.ts                             # Normalizacion de env vars
    mongo.ts                           # Conexion Mongo singleton
    tenant.ts                          # Tenant/returnUrl validation
    tickets.ts                         # Emision/canje de tickets
    utils.ts                           # cn() para Tailwind
  sdk/
    index.ts                           # buildLoginUrl + exchangeLoginTicket
    next.ts                            # Helpers Next (JWT, cookies, middleware)
    react.ts                           # Hook useLoginUrl
public/
  images/oauth-*.svg                   # Iconos para botones OAuth
scripts/
  seed-tenants.mjs                     # Seed de tenants y auth_clients
tests/
  lib/ routes/ sdk/                    # Tests Vitest
```

Archivos de configuracion a replicar (contenido completo en esta guia):
- `package.json` (dependencias y scripts)
- `tsconfig.json` (alias `@alterfreak-auth-hub/*` y `@/*`)
- `tailwind.config.cjs` + `postcss.config.cjs`
- `.eslintrc.json`, `.prettierrc`, `.eslintignore`
- `vitest.config.ts`
- `.env.local.example`

No copiar `node_modules` ni `dist`.

## 4) Archivos de configuracion (contenido completo)

### package.json
```json
{
  "name": "alterfreak-auth",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  },
  "dependencies": {
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@types/mongodb": "^4.0.6",
    "better-auth": "^1.4.9",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "dotenv": "^17.2.3",
    "jose": "^5.4.0",
    "lucide-react": "^0.562.0",
    "mongodb": "^7.0.0",
    "next": "15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20.17.9",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "15.1.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.5.4",
    "postcss": "^8.4.49",
    "prettier": "^3.3.2",
    "tailwindcss": "^3.4.14",
    "typescript": "5.5.4",
    "vitest": "^2.1.9"
  }
}
```

### next.config.mjs
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

### tailwind.config.cjs
```js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-color))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

### postcss.config.cjs
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@alterfreak-auth-hub/*": [
        "src/*"
      ],
      "@/*": [
        "src/*"
      ]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx",
    "tests/**/*.ts",
    "tests/**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### vitest.config.ts
```ts
import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    clearMocks: true,
  },
  resolve: {
    alias: {
      '@alterfreak-auth-hub': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

### .eslintrc.json
```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-namespace": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "no-extra-bind": 0,
    "no-underscore-dangle": [
      "error",
      {
        "allowAfterThis": true,
        "allowAfterSuper": true,
        "allow": [
          "_id",
          "_rev",
          "__authMongoConnection"
        ]
      }
    ],
    "no-param-reassign": 0,
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "class-methods-use-this": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/jsx-indent": [
      "error",
      2
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "no-new": 0,
    "max-len": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": 0,
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "ignore"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-named-as-default": "off",
    "no-useless-escape": "off",
    "operator-linebreak": "off",
    "lines-between-class-members": "off",
    "react/display-name": 1,
    "react/state-in-constructor": [
      2,
      "never"
    ],
    "jsx-a11y/control-has-associated-label": 1,
    "react/static-property-placement": [
      2,
      "static public field"
    ],
    "react/jsx-curly-brace-presence": [
      2,
      "never"
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-await-in-loop": 0,
    "no-empty-function": 0,
    "@typescript-eslint/no-empty-function": [
      2,
      {
        "allow": [
          "arrowFunctions"
        ]
      }
    ],
    "no-redeclare": 0,
    "@typescript-eslint/no-redeclare": 2,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "no-useless-constructor": 0,
    "@typescript-eslint/no-useless-constructor": 2,
    "no-use-before-define": "off",
    "no-continue": 0,
    "curly": [
      "error",
      "multi-line"
    ],
    "react/function-component-definition": "off",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description"
      }
    ],
    "import/no-cycle": "off"
  }
}
```

### .prettierrc
```json
{
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### .eslintignore
```text
*.js
*.mjs
*.cjs
```

### next-env.d.ts
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

### .env.local.example
```text
BETTER_AUTH_SECRET=
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB=alterfreak-auth
MONGODB_AUTH_SOURCE=admin
AUTH_ALLOWED_RETURN_ORIGINS=http://localhost:3000
AUTH_DEFAULT_RETURN_URL=http://localhost:3000/auth/callback
AUTH_LOGIN_TICKET_TTL_MS=300000
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_AUTH_HUB_BASE_URL=http://localhost:3000
# Optional social providers
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MICROSOFT_CLIENT_ID=
MICROSOFT_CLIENT_SECRET=
MICROSOFT_TENANT_ID=common
```

## 5) Flujo de autenticacion (resumen)
1. App cliente construye URL con `buildLoginUrl()` (SDK) y redirige al hub.
2. Hub renderiza `src/app/page.tsx`, valida tenant/client/returnUrl desde query params.
3. `login-form.tsx` usa `authClient` (Better Auth) para signin/signup.
4. Luego llama `/api/tickets/issue` para emitir ticket y redireccionar a `returnUrl?ticket=...`.
5. App cliente recibe `ticket` y lo canjea via `/api/tickets/exchange` usando `exchangeLoginTicket()`.
6. App cliente crea su propia sesion (cookie) y continua.

Social login:
- `authClient.signIn.social()` envia a `/auth/callback` con tenant/client/returnUrl en query.
- `auth/callback/route.ts` valida todo y emite ticket antes de redirigir.

## 6) Configuracion y env vars
Ver `.env.local.example`. Variables clave:
- `BETTER_AUTH_SECRET`
- `MONGODB_URI`, `MONGODB_DB`, `MONGODB_AUTH_SOURCE`
- `AUTH_ALLOWED_RETURN_ORIGINS`, `AUTH_DEFAULT_RETURN_URL`, `AUTH_LOGIN_TICKET_TTL_MS`
- `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_AUTH_HUB_BASE_URL`
- Opcionales: `GOOGLE_CLIENT_ID/SECRET`, `MICROSOFT_CLIENT_ID/SECRET/TENANT_ID`

`src/lib/env.ts` define defaults y normaliza listas/numeros.

## 7) MongoDB y colecciones
- `tenants`: guarda `tenantId`, `name`, `description`, `allowsSignUp`, `allowedReturnUrls`, `allowedOrigins`.
- `auth_clients`: guarda `clientId`, `tenantId`, `clientSecretHash`, `allowedReturnUrls`, `allowedOrigins`, `active`.
- `auth_login_tickets`: tickets hashed (TTL index en `expiresAt`).

Seed inicial:
- `node scripts/seed-tenants.mjs` crea tenants y clients, imprime secretos nuevos.

## 8) SDK embebido (para apps consumidoras)
- `src/sdk/index.ts`: `buildLoginUrl()` y `exchangeLoginTicket()`.
- `src/sdk/next.ts`: helpers para callback en Next.js, JWT y middleware.
- `src/sdk/react.ts`: hook `useLoginUrl()`.

Si el nuevo proyecto va a publicar el SDK por separado, aislar `src/sdk` y empaquetarlo.

## 9) Scripts y pruebas
Scripts en `package.json`:
- `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `test:watch`, `test:coverage`.
Tests en `tests/**` con Vitest y alias `@alterfreak-auth-hub` configurado en `vitest.config.ts`.

## 10) Pasos para replicar en un nuevo proyecto
1. Crear un proyecto Next.js con App Router y TypeScript.
2. Copiar dependencias de `package.json` y scripts.
3. Replicar `tsconfig.json` (alias) y `vitest.config.ts`.
4. Copiar `tailwind.config.cjs`, `postcss.config.cjs` y `src/app/globals.css`.
5. Copiar `src/app`, `src/components`, `src/lib`, `src/sdk` respetando rutas y alias.
6. Ajustar branding, tokens y textos en `globals.css` y `login-form.tsx`.
7. Configurar `.env.local` usando `.env.local.example`.
8. Preparar MongoDB, correr `scripts/seed-tenants.mjs`.
9. Verificar flujo: login -> ticket -> exchange.

## 11) Puntos sensibles a adaptar
- Dominios permitidos (`allowedReturnUrls`, `allowedOrigins`).
- Secretos de clientes (`clientSecretHash`) y `BETTER_AUTH_SECRET`.
- UI/branding (fuentes en `src/app/layout.tsx` y tokens en `globals.css`).
- Nombres de cookies en helpers de `src/sdk/next.ts` si se requiere.
