import { vi } from 'vitest';

// Mock environment variables
process.env.CLOUDINARY_CLOUD_NAME = 'test-cloud';
process.env.CLOUDINARY_API_KEY = 'test-api-key';
process.env.CLOUDINARY_API_SECRET = 'test-api-secret';

// Mock Cloudinary
vi.mock('cloudinary', () => ({
  v2: {
    config: vi.fn(),
    api: {
      resources: vi.fn(() =>
        Promise.resolve({
          resources: [],
          next_cursor: null,
        })
      ),
    },
    uploader: {
      upload_stream: vi.fn(),
    },
    url: vi.fn(publicId => `https://res.cloudinary.com/test-cloud/image/upload/${publicId}`),
  },
}));

// Mock console methods to avoid noise in tests
const consoleMock = {
  ...console,
  log: vi.fn(),
  error: vi.fn(),
  warn: vi.fn(),
  info: vi.fn(),
};

Object.assign(global.console, consoleMock);
