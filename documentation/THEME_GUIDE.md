# Tema Personalizado - Paleta de Colores

Este documento explica cómo usar el tema personalizado creado con tu paleta de
colores específica.

## Paleta de Colores

| Color       | Hex                                                             | Uso                                     | Variable CSS          |
| ----------- | --------------------------------------------------------------- | --------------------------------------- | --------------------- |
| **#333446** | ![#333446](https://via.placeholder.com/20/333446/000000?text=+) | Oscuro principal, texto, fondos oscuros | `--color-primary-950` |
| **#7F8CAA** | ![#7F8CAA](https://via.placeholder.com/20/7F8CAA/000000?text=+) | Color principal, botones, enlaces       | `--color-primary-500` |
| **#B8CFCE** | ![#B8CFCE](https://via.placeholder.com/20/B8CFCE/000000?text=+) | Color de acento, resaltados             | `--color-accent-200`  |
| **#EAEFEF** | ![#EAEFEF](https://via.placeholder.com/20/EAEFEF/000000?text=+) | Color claro, fondos, espacios en blanco | `--color-neutral-50`  |

## Clases de Tailwind Generadas

### Colores Principales

- `bg-primary-50` a `bg-primary-950` - Variaciones del color principal
- `text-primary-50` a `text-primary-950` - Texto en colores principales
- `border-primary-50` a `border-primary-950` - Bordes en colores principales

### Colores de Acento

- `bg-accent-50` a `bg-accent-900` - Variaciones del color de acento
- `text-accent-50` a `text-accent-900` - Texto en colores de acento
- `border-accent-50` a `border-accent-900` - Bordes en colores de acento

### Colores Neutros

- `bg-neutral-50` a `bg-neutral-900` - Variaciones neutras
- `text-neutral-50` a `text-neutral-900` - Texto neutro
- `border-neutral-50` a `border-neutral-900` - Bordes neutros

## Aplicación del Tema

El tema está completamente integrado en la aplicación de galería. Puedes ver su
implementación en las páginas principales:

- **Página de Inicio** (`/`): Hero con gradiente y tarjetas temáticas
- **Galería** (`/gallery`): Lista de imágenes con estilo consistente
- **Subir Imagen** (`/upload`): Formulario de carga estilizado

## Componentes Personalizados

### Botones

```html
<button class="btn-primary">Botón Primario</button>
<button class="btn-secondary">Botón Secundario</button>
<button class="btn-outline">Botón con Borde</button>
<button class="btn-ghost">Botón Fantasma</button>
```

### Tarjetas

```html
<div class="card p-6">Tarjeta Normal</div>
<div class="card-dark p-6">Tarjeta Oscura</div>
<div class="card-accent p-6">Tarjeta con Acento</div>
```

### Formularios

```html
<input type="text" class="input-field" placeholder="Campo de entrada" />
<input type="text" class="input-field-dark" placeholder="Campo oscuro" />
<input type="email" class="input-error" placeholder="Campo con error" />
```

### Tipografía

```html
<h1 class="heading-1">Título Principal</h1>
<h2 class="heading-2">Título Secundario</h2>
<h3 class="heading-3">Título Terciario</h3>
<h4 class="heading-4">Título Cuarto</h4>

<p class="body-large">Texto grande</p>
<p class="body-normal">Texto normal</p>
<p class="body-small">Texto pequeño</p>
<p class="text-muted">Texto atenuado</p>
```

### Badges y Etiquetas

```html
<span class="badge-primary">Primario</span>
<span class="badge-accent">Acento</span>
<span class="badge-neutral">Neutral</span>
<span class="badge-success">Éxito</span>
<span class="badge-warning">Advertencia</span>
<span class="badge-error">Error</span>
```

### Contenedores

```html
<div class="container-custom">Contenedor personalizado</div>
<div class="content-wrapper">Envoltorio de contenido</div>
<section class="section-padding">Sección con padding</section>
```

### Alertas

```html
<div class="alert-info">Alerta informativa</div>
<div class="alert-success">Alerta de éxito</div>
<div class="alert-warning">Alerta de advertencia</div>
<div class="alert-error">Alerta de error</div>
```

### Gradientes

```html
<div class="bg-gradient-primary">Gradiente primario</div>
<div class="bg-gradient-accent">Gradiente de acento</div>
<div class="bg-gradient-neutral">Gradiente neutral</div>
<div class="bg-gradient-hero">Gradiente hero</div>
```

### Efectos de Hover

```html
<div class="hover-lift">Elemento que se eleva al hover</div>
<div class="hover-scale">Elemento que escala al hover</div>
<div class="hover-glow">Elemento con resplandor al hover</div>
```

### Estados de Carga

```html
<div class="loading-spinner"></div>
<div class="loading-pulse h-4 w-32"></div>
<div class="skeleton h-4 w-32"></div>
```

### Navegación

```html
<a href="#" class="nav-link">Enlace de navegación</a>
<a href="#" class="nav-link-active">Enlace activo</a>
```

## Modo Oscuro

El tema incluye soporte automático para modo oscuro que se activa con la
preferencia del sistema:

```css
@media (prefers-color-scheme: dark) {
  /* Los estilos se ajustan automáticamente */
}
```

## Personalización Adicional

### Agregar Nuevos Colores

Para agregar variaciones adicionales de los colores, edita el archivo
`src/styles/global.css`:

```css
@theme {
  /* Agregar nuevas variaciones */
  --color-primary-25: #f8f9fb;
  --color-primary-975: #2a2b3a;
}
```

### Crear Nuevos Componentes

Para crear nuevos componentes, edita el archivo `src/styles/components.css`:

```css
@utility mi-componente {
  @apply bg-primary-500 text-white p-4 rounded-lg;
}
```

## Ejemplos de Uso

Visita `/theme-demo` para ver todos los componentes en acción y obtener
inspiración sobre cómo combinar los diferentes elementos del tema.

## Mejores Prácticas

1. **Consistencia**: Usa siempre las clases del tema en lugar de colores
   hardcodeados
2. **Accesibilidad**: Asegúrate de que los contrastes cumplan con WCAG
3. **Responsividad**: Combina las clases del tema con las utilidades responsive
   de Tailwind
4. **Performance**: Usa las clases predefinidas para aprovechar la optimización
   de Tailwind

## Archivo de Configuración

El tema se configura principalmente en:

- `src/styles/global.css` - Variables del tema y configuración principal
- `src/styles/components.css` - Componentes personalizados y utilidades
