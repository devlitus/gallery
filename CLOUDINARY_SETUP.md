# Configuración de Cloudinary para la Galería de Imágenes

Este documento te guiará paso a paso para configurar Cloudinary con tu aplicación de galería.

## 📋 Requisitos Previos

- Una cuenta de Cloudinary (gratuita disponible)
- Acceso a las credenciales de tu cuenta

## 🚀 Pasos de Configuración

### 1. Crear una Cuenta de Cloudinary

1. Ve a [cloudinary.com](https://cloudinary.com)
2. Haz clic en "Sign Up Free"
3. Completa el registro con tu email
4. Verifica tu cuenta a través del email que recibirás

### 2. Obtener las Credenciales

1. Una vez logueado, ve al **Dashboard**
2. En la sección "Account Details" encontrarás:
   - **Cloud Name**: Tu nombre de nube único
   - **API Key**: Tu clave de API
   - **API Secret**: Tu secreto de API (haz clic en "Show" para verlo)

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto con estas variables:

```env
CLOUDINARY_CLOUDNAME=tu_cloud_name_aqui
CLOUDINARY_APIKEY=tu_api_key_aqui
CLOUDINARY_APISECRET=tu_api_secret_aqui
CLOUDINARY_URL=cloudinary://tu_api_key:tu_api_secret@tu_cloud_name
```

**Ejemplo real:**

```env
CLOUDINARY_CLOUDNAME=miempresa123
CLOUDINARY_APIKEY=123456789012345
CLOUDINARY_APISECRET=abcdef123456789-abcdef123456789
CLOUDINARY_URL=cloudinary://123456789012345:abcdef123456789-abcdef123456789@miempresa123
```

### 4. Configurar la Carpeta imageSD

Para que la aplicación funcione correctamente, necesitas crear la carpeta "imageSD":

#### Opción A: Crear la carpeta manualmente

1. Ve a "Media Library" en tu dashboard de Cloudinary
2. Haz clic en "Create Folder"
3. Nombra la carpeta como "imageSD"
4. Confirma la creación

#### Opción B: La carpeta se creará automáticamente

- La primera vez que subas una imagen a través de la aplicación, la carpeta se creará automáticamente

### 5. Verificar la Configuración

1. Reinicia tu servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Ve a `http://localhost:4321/gallery`

3. Si ves el mensaje "No hay imágenes", la configuración es correcta

4. Si ves un error, revisa que las credenciales estén correctas

## 🔧 Solución de Problemas

### Error: "General Error" o HTTP 500

- **Causa**: Credenciales incorrectas
- **Solución**: Verifica que las variables de entorno sean exactas

### Error: "Unauthorized"

- **Causa**: API Secret incorrecto
- **Solución**: Copia nuevamente el API Secret desde Cloudinary

### La carpeta imageSD no aparece

- **Causa**: La carpeta está vacía o no existe
- **Solución**: Sube una imagen a través de la aplicación o créala manualmente

### Las imágenes no se muestran

- **Causa**: Problemas de permisos o configuración
- **Solución**:
  1. Verifica que las imágenes estén en modo "public"
  2. Revisa los logs de la consola del navegador

## 📝 Notas Importantes

### Límites de la Cuenta Gratuita

- **Almacenamiento**: 25 GB
- **Ancho de banda**: 25 GB/mes
- **Transformaciones**: 25,000/mes
- **Imágenes**: Ilimitadas

### Seguridad

- Nunca compartas tu API Secret públicamente
- El archivo `.env` está en `.gitignore` por seguridad
- Para producción, configura las variables en tu plataforma de hosting

### Rendimiento

- Cloudinary optimiza automáticamente las imágenes
- Las miniaturas se generan on-the-fly
- El CDN global mejora la velocidad de carga

## 🌐 URLs de Cloudinary

Una vez configurado, tus imágenes tendrán URLs como:

```
https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/imageSD/mi-imagen.jpg
```

## 🆘 Soporte Adicional

Si tienes problemas:

1. **Documentación oficial**: [cloudinary.com/documentation](https://cloudinary.com/documentation)
2. **Support de Cloudinary**: Desde tu dashboard
3. **Logs de la aplicación**: Revisa la consola del navegador y terminal

## ✅ Checklist de Configuración

- [ ] Cuenta de Cloudinary creada y verificada
- [ ] Credenciales copiadas del dashboard
- [ ] Archivo `.env` creado con las variables correctas
- [ ] Servidor reiniciado después de agregar las variables
- [ ] Aplicación ejecutándose sin errores
- [ ] Página de galería carga correctamente
- [ ] Funcionalidad de subida de imágenes probada

Una vez completados todos estos pasos, tu aplicación de galería estará completamente funcional con Cloudinary!
