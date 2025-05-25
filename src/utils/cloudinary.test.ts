import { describe, it, expect } from 'vitest';
import { generateThumbnailUrl } from '../utils/cloudinary';

describe('Cloudinary Utils', () => {
  describe('generateThumbnailUrl', () => {
    it('should generate correct thumbnail URL', () => {
      const publicId = 'test-image';
      const result = generateThumbnailUrl(publicId);

      expect(result).toContain('res.cloudinary.com');
      expect(result).toContain(publicId);
      expect(result).toContain('q_auto');
    });

    it('should handle special characters in public_id', () => {
      const publicId = 'folder/test-image-2025';
      const result = generateThumbnailUrl(publicId);

      expect(result).toContain(publicId);
    });
  });
});
