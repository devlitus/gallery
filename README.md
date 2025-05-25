# Galería de Imágenes con Cloudinary

Una aplicación moderna de galería de imágenes construida con Astro, TypeScript y
Tailwind CSS, integrada con Cloudinary para almacenamiento y optimización de
imágenes.

## ✨ Características

- 🖼️ **Galería de Imágenes**: Visualiza imágenes desde la carpeta "imageSD" de
  Cloudinary
- 📤 **Subida de Imágenes**: Interfaz drag-and-drop para subir nuevas imágenes
- 🎨 **Diseño Responsivo**: Diseño moderno y responsivo con Tailwind CSS
- ⚡ **Optimización Automática**: Cloudinary optimiza automáticamente las
  imágenes
- 🔍 **Vista Previa**: Previsualización de imágenes antes de subirlas
- 🛡️ **Validación**: Validación de tipos y tamaños de archivo
- 📱 **Mobile-First**: Optimizado para dispositivos móviles
- 🚀 **CI/CD**: Pipeline automático con GitHub Actions
- 🧪 **Testing**: Tests automatizados con Vitest
- 🔒 **Seguridad**: Análisis de código y dependencias
- 📊 **Calidad**: Linting, formateo y checks de TypeScript

## 🚀 Configuración

### Prerrequisitos

- Node.js 18+
- Cuenta de Cloudinary
- npm o yarn

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con tus credenciales de
Cloudinary:

```env
CLOUDINARY_CLOUDNAME=tu_cloud_name
CLOUDINARY_APIKEY=tu_api_key
CLOUDINARY_APISECRET=tu_api_secret
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview

# Ejecutar tests
npm run test

# Linting y formateo
npm run lint
npm run format

# Verificación de tipos
npm run type-check
```

## 🚀 CI/CD

Este proyecto incluye un pipeline completo de CI/CD con GitHub Actions que
incluye:

- ✅ **Tests automáticos** con Vitest
- 🔍 **Linting** con ESLint y Prettier
- 🔒 **Análisis de seguridad** con CodeQL
- 📦 **Revisión de dependencias** automática
- 🌐 **Deploy automático** a Netlify
- 📊 **Análisis de rendimiento** con Lighthouse CI

### Estado del Pipeline

![CI/CD Status](https://github.com/devlitus/gallery/workflows/🚀%20CI/CD%20Pipeline/badge.svg)
![Security Analysis](https://github.com/devlitus/gallery/workflows/🔍%20CodeQL%20Security%20Analysis/badge.svg)

Para más detalles sobre la configuración de CI/CD, consulta la
[📚 documentación completa](./documentation/README.md).

### Comandos de Desarrollo

```bash
# Verificar calidad del código
npm run lint:check
npm run format:check
npm run type-check

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── FileUpload.astro # Componente de subida de archivos
│   └── ImageCard.astro  # Tarjeta para mostrar imágenes
├── layouts/
│   └── Layout.astro     # Layout principal
├── pages/
│   ├── index.astro      # Página de inicio
│   ├── gallery.astro    # Página de galería
│   ├── upload.astro     # Página de subida
│   └── api/
│       └── upload.ts    # API endpoint para subir imágenes
├── utils/
│   └── cloudinary.ts    # Utilidades de Cloudinary
└── styles/
    └── global.css       # Estilos globales con Tailwind
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com)** - Framework de CSS utilitario
- **[Cloudinary](https://cloudinary.com)** - Gestión y optimización de imágenes
- **[Vitest](https://vitest.dev)** - Framework de testing
- **[ESLint](https://eslint.org)** - Linter para JavaScript/TypeScript
- **[Prettier](https://prettier.io)** - Formateador de código
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

## 📖 Uso

### Página de Inicio

Navega a `http://localhost:4321` para ver la página principal con acceso a:

- Galería de imágenes
- Subida de nuevas imágenes

### Ver Galería

Ve a `/gallery` para:

- Explorar todas las imágenes de la carpeta "imageSD"
- Ver miniaturas optimizadas
- Acceder a las imágenes originales
- Copiar URLs de las imágenes

### Subir Imágenes

Ve a `/upload` para:

- Seleccionar archivos mediante drag-and-drop o click
- Previsualizar imágenes antes de subirlas
- Validar formatos y tamaños
- Subir a la carpeta "imageSD" de Cloudinary

### Formatos Soportados

- JPEG/JPG
- PNG
- GIF
- WEBP
- Tamaño máximo: 10MB

## 🔧 Configuración de Cloudinary

1. **Crear una cuenta**: Regístrate en [Cloudinary](https://cloudinary.com)
2. **Obtener credenciales**: Ve a Dashboard → Settings → Account
3. **Configurar carpeta**: La aplicación usa la carpeta "imageSD" por defecto
4. **Variables de entorno**: Configura las credenciales en el archivo `.env`

## 🚢 Despliegue

Para desplegar en producción, necesitarás configurar un adaptador de Astro
apropiado para tu plataforma:

```bash
# Ejemplo para Vercel
npm install @astrojs/vercel

# Ejemplo para Netlify
npm install @astrojs/netlify
```

Luego actualiza `astro.config.mjs` con el adaptador correspondiente.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Documentación

Este proyecto incluye documentación completa y detallada en la carpeta
`documentation/`:

### 🎯 **Documentos Principales**

- **[📖 Estado del Proyecto](./documentation/PROJECT_COMPLETED.md)** - Estado
  actual y resumen completo
- **[🚀 Guía de Setup](./documentation/SETUP_FINAL_SIMPLE.md)** - Configuración
  paso a paso
- **[⚙️ CI/CD Workflows](./documentation/WORKFLOWS_FINAL.md)** - Configuración
  de GitHub Actions
- **[🔗 Deploy Netlify](./documentation/NETLIFY_DEPLOY_FINAL.md)** - Setup de
  deploy automático
- **[📸 Cloudinary Setup](./documentation/CLOUDINARY_SETUP.md)** - Configuración
  de imágenes

### 📋 **Índice Completo**

Ver **[📚 Índice de Documentación](./documentation/README.md)** para una guía
completa de todos los documentos disponibles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más
detalles.

## 🛟 Soporte

Si tienes problemas o preguntas:

1. Revisa la **[📚 documentación del proyecto](./documentation/README.md)**
2. Consulta la [documentación de Astro](https://docs.astro.build)
3. Revisa la [documentación de Cloudinary](https://cloudinary.com/documentation)
4. Abre un issue en este repositorio
