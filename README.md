# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## Guía de Estilo y Linting

Utilizamos ESLint y Prettier para mantener un código consistente y de alta calidad.

### Configuración de ESLint

El proyecto utiliza una configuración personalizada de ESLint con las siguientes reglas principales:

#### Reglas de React

- ✅ `react/react-in-jsx-scope: off` - No es necesario importar React en cada archivo
- ⚠️ `react/prop-types: error` - Props deben estar tipadas
- ⚠️ `react/jsx-key: error` - Arrays de elementos deben tener keys únicas
- ⚠️ `react-hooks/rules-of-hooks: error` - Reglas de hooks de React
- 🔄 `react-hooks/exhaustive-deps: warn` - Dependencias en useEffect

#### Reglas de TypeScript

- ⚠️ `@typescript-eslint/no-explicit-any: warn` - Evitar uso de `any`
- ❌ `@typescript-eslint/no-unused-vars: error` - No variables sin usar
- ❌ `@typescript-eslint/no-empty-interface: error` - No interfaces vacías
- ⚠️ `@typescript-eslint/no-empty-function: warn` - Evitar funciones vacías
- ⚠️ `@typescript-eslint/no-non-null-assertion: warn` - Evitar el operador `!`

#### Reglas de Formato

- 🎨 `quotes: ['error', 'single']` - Usar comillas simples
- 🎨 `semi: ['error', 'always']` - Punto y coma obligatorio
- 🎨 `no-multiple-empty-lines: ['error', { max: 1 }]` - Máximo una línea en blanco
- ⚠️ `no-console: warn` - Evitar console.log en producción
- ❌ `no-debugger: error` - No debugger statements
- ❌ `no-duplicate-imports: error` - No importaciones duplicadas
- ⚠️ `prefer-const: error` - Usar const cuando sea posible
- ⚠️ `eqeqeq: ['error', 'always']` - Usar === en lugar de ==

#### Configuración de Prettier

```json
{
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": true,
    "printWidth": 100,
    "bracketSpacing": true,
    "arrowParens": "avoid"
}
```

### Scripts de Linting

```bash
# Verificar errores de linting
npm run lint

# Corregir automáticamente los errores que se puedan
npm run lint:fix
```

### VS Code Setup

Para obtener el mejor resultado, instala las extensiones:

- ESLint
- Prettier

La configuración del workspace ya está lista para:

- Formatear al guardar
- Corregir errores de ESLint al guardar
- Usar 4 espacios para la indentación
- Detectar errores mientras escribes

## Guía de Commits

Seguimos las convenciones de [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de commits limpio y significativo.

### Formato

```
tipo(ámbito): descripción

[cuerpo]

[nota de pie]
```

### Tipos de Commits

- `feat`: Nuevas características o funcionalidades
- `fix`: Corrección de errores
- `docs`: Cambios en la documentación
- `style`: Cambios que no afectan al código (espacios, formato, etc.)
- `refactor`: Cambios en el código que no corrigen errores ni añaden funcionalidades
- `perf`: Mejoras de rendimiento
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento, cambios en el proceso de build, etc.
- `revert`: Revertir un commit anterior
- `ci`: Cambios en la configuración de CI/CD
- `build`: Cambios que afectan al sistema de build

### Ejemplos

✅ Buenos commits:

```
feat(auth): implementar login con Google
fix(api): corregir error en la validación de tokens
docs(readme): actualizar instrucciones de instalación
style(components): aplicar reglas de prettier
refactor(utils): simplificar función de formateo
test(auth): añadir tests para el proceso de login
```

❌ Commits incorrectos:

```
actualizar código
fix bug
WIP
```

### Reglas

1. El tipo y la descripción son obligatorios
2. El tipo debe estar en minúsculas
3. La descripción debe comenzar en minúsculas
4. No usar punto final en la descripción
5. Usar modo imperativo en la descripción ("añadir" en lugar de "añadido")
6. La longitud máxima del encabezado es de 72 caracteres
7. El ámbito es opcional y debe estar en minúsculas

### Ámbitos Comunes

- `auth`: Autenticación y autorización
- `api`: Llamadas a la API
- `ui`: Componentes de interfaz de usuario
- `core`: Funcionalidad central
- `config`: Configuración
- `deps`: Dependencias
- `test`: Tests y configuración de testing

### Scripts

Para asegurar que los commits siguen estas convenciones, usamos commitlint. Los commits que no sigan el formato serán rechazados automáticamente.

---

Built with ❤️ using React Router.
