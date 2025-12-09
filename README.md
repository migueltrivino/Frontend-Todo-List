# Frontend – Instalación
Proyecto frontend desarrollado con **React + Vite**.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** (versión recomendada: 18 o superior)  
  Verifica tu versión con:
  ```bash
  node -v
  ```
- **NPM** (incluido con Node.js)
  ```bash
  npm -v
  ```

## 1. Clonar el repositorio 

```bash
git clone https://github.com/migueltrivino/Frontend-Todo-List.git
cd frontend
```

## 2. Instalar dependencias

Ejecuta:

```bash
npm install
```

## ▶ 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Accede a la URL que aparece en consola, normalmente:

```
http://localhost:5173/
```

## ⚙ 4. Variables de entorno (opcional)

Crea un archivo `.env` en la raíz:

```
VITE_API_URL=http://localhost:8000
```

> No subas el `.env` a GitHub.

## 5. Construcción para producción (opcional)

```bash
npm run build
```

Los archivos finales estarán en la carpeta `dist/`.

## 6. Vista previa de producción

```bash
npm run preview
```

## Notas finales

- Ejecuta `npm install` después de clonar o actualizar el proyecto.  
- Usa `npm run dev` para trabajar en desarrollo.  
- Para desplegar en Netlify, Vercel o GitHub Pages, asegúrate de incluir el archivo `vite.config.js`.
