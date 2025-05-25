import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../constants';

export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export async function getImagesFromFolder(
  folder: string = 'imageSD'
): Promise<CloudinaryResource[]> {
  try {
    // Verificar configuración
    const config = cloudinary.config();
    if (!config.cloud_name || !config.api_key || !config.api_secret) {
      throw new Error(
        'Cloudinary no está configurado correctamente. Verifique las variables de entorno.'
      );
    }

    // Primero intentamos buscar en la carpeta específica
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folder,
      max_results: 500,
      resource_type: 'image',
    });

    if (result.resources && result.resources.length > 0) {
      return result.resources;
    }

    // Si no hay imágenes en la carpeta específica, buscar todas las imágenes
    const fallbackResult = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500,
      resource_type: 'image',
    });

    return fallbackResult.resources || [];
  } catch (error) {
    // Solo mostrar error en desarrollo
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.error('Error al obtener imágenes de Cloudinary:', error);
    }

    if (error instanceof Error) {
      if (error.message.includes('Invalid API key')) {
        throw new Error('API key de Cloudinary inválida. Verifique sus credenciales.');
      }
      if (error.message.includes('Must supply api_secret')) {
        throw new Error('API secret de Cloudinary faltante. Verifique sus credenciales.');
      }
      if (error.message.includes('Invalid cloud name')) {
        throw new Error('Nombre de cloud de Cloudinary inválido. Verifique sus credenciales.');
      }
    }

    throw error;
  }
}

export async function uploadImage(
  file: File,
  folder: string = 'imageSD'
): Promise<CloudinaryResource | null> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder,
            resource_type: 'image',
          },
          (error, result) => {
            if (error) reject(error);
            else if (result) resolve(result);
            else reject(new Error('Upload failed - no result returned'));
          }
        )
        .end(buffer);
    });

    return result as CloudinaryResource;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Error uploading image to Cloudinary:', error);
    }
    return null;
  }
}

export function generateThumbnailUrl(publicId: string): string {
  // URL sin transformaciones de tamaño - imagen original con optimización de calidad
  const originalUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/q_auto/${publicId}`;

  // También generar la URL usando el SDK de Cloudinary
  const sdkUrl = cloudinary.url(publicId, {
    quality: 'auto',
    fetch_format: 'auto',
    secure: true,
  });

  // Debug logging
  if (import.meta.env.DEV) {
    console.log(`Original URL for ${publicId}: ${originalUrl}`);
    console.log(`SDK URL for ${publicId}: ${sdkUrl}`);
  }

  // Usar la URL original sin restricciones de tamaño
  return originalUrl;
}

export { cloudinary };
