# 🚀 Deploy Automático con Netlify (Sin GitHub Actions)

## 📋 **Pasos para Configurar Deploy Nativo**

### 1. **Configurar Netlify**

1. Ve a [netlify.com](https://netlify.com) y conecta tu repositorio
2. Configura el build:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

### 2. **Variables de Entorno en Netlify**

En el dashboard de Netlify → Site settings → Environment variables:

```
CLOUDINARY_CLOUDNAME = tu_cloud_name
CLOUDINARY_APIKEY = tu_api_key  
CLOUDINARY_APISECRET = tu_api_secret
```

### 3. **Astro Config Optimizada**

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://gallery-devlitus.netlify.app',
  output: 'server',
  adapter: netlify(),
});
```

### 4. **Package.json Scripts**

```json
{
  "scripts": {
    "build": "astro build",
    "dev": "astro dev",
    "preview": "astro preview"
  }
}
```

## ✅ **Ventajas del Deploy Nativo**

- 🚀 **Deploy automático** en cada push a main
- 🔧 **Build automático** en servidores de Netlify
- 🔒 **Variables seguras** en dashboard de Netlify
- 📱 **Preview deploys** automáticos en PRs
- 🌐 **CDN global** incluido
- 📊 **Analytics** incluidos

## 🔧 **Lo que Perderías (sin GitHub Actions)**

- ❌ Tests automáticos
- ❌ Linting automático
- ❌ Security scans
- ❌ Lighthouse CI
- ❌ Control granular del pipeline

## 🎯 **Configuración Recomendada**

Si eliges esta opción, deberías:

1. **Instalar adapter específico de Netlify**:
   ```bash
   npm install @astrojs/netlify
   ```

2. **Eliminar GitHub Actions** relacionadas con deploy

3. **Configurar Netlify** para build automático

4. **Mover secrets** a dashboard de Netlify

¿Quieres proceder con esta configuración más simple?
