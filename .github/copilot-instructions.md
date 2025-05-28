# GitHub Copilot Instructions for Astro TypeScript + Tailwind Project

## Project Overview

This is an Astro project using TypeScript for type safety and Tailwind CSS for
styling. Astro focuses on content-first websites with minimal client-side
JavaScript and optimal performance through islands architecture.

## Code Style & Formatting

### TypeScript Standards

- Use strict TypeScript configuration
- Prefer explicit types over `any`
- Use type assertions sparingly, prefer type guards
- Utilize Astro's built-in TypeScript support
- Use interface over type for object shapes
- Implement proper error handling with typed errors

### Component Structure

```typescript
---
// Frontmatter: Server-side code
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!-- Template: HTML with optional client-side framework components -->
<div class="container mx-auto px-4">
  <h1 class="text-3xl font-bold text-gray-900">{title}</h1>
  {description && <p class="text-gray-600 mt-2">{description}</p>}
</div>
```

### File Naming Conventions

- Components: PascalCase (`Header.astro`, `BlogPost.astro`)
- Pages: kebab-case (`about-us.astro`, `blog/[slug].astro`)
- Layouts: PascalCase (`BaseLayout.astro`, `BlogLayout.astro`)
- Utilities: camelCase (`formatDate.ts`, `api.ts`)

## Astro-Specific Patterns

### Page Components

```typescript
---
// Always define page metadata
export const prerender = true; // for static generation
import Layout from '../layouts/BaseLayout.astro';

interface PageData {
  title: string;
  description: string;
}

const pageData: PageData = {
  title: "Page Title",
  description: "SEO description"
};
---

<Layout title={pageData.title} description={pageData.description}>
  <!-- Page content -->
</Layout>
```

### Dynamic Routes

```typescript
---
// For [slug].astro files
export async function getStaticPaths() {
  return [
    { params: { slug: "post-1" }, props: { title: "Post 1" } },
    { params: { slug: "post-2" }, props: { title: "Post 2" } },
  ];
}

interface Props {
  title: string;
}

const { title } = Astro.props;
const { slug } = Astro.params;
---
```

### Client-Side Interactivity

- Use `client:load` for immediately needed interactivity
- Use `client:idle` for non-critical components
- Use `client:visible` for components below the fold
- Prefer vanilla JS or minimal frameworks for simple interactions

```typescript
---
// Import framework components when needed
import ReactComponent from '../components/ReactComponent.jsx';
import VueComponent from '../components/VueComponent.vue';
---

<ReactComponent client:load />
<VueComponent client:visible />
```

## Tailwind CSS Guidelines

### Utility-First Approach

- Use Tailwind utilities instead of custom CSS
- Create component classes only for repeated patterns
- Use arbitrary values `[value]` for one-off customizations
- Use arbitrary properties `[property:value]` when utilities don't exist
- Leverage Tailwind's design system (spacing, colors, typography)
- Prefer composition over `@apply` - use `@apply` only for component extraction

### Modern CSS Features

```html
<!-- Container queries (Tailwind v4+) -->
<div class="@container">
  <div class="@sm:grid-cols-2 @lg:grid-cols-3 grid gap-4">
    <!-- Responsive based on container size -->
  </div>
</div>

<!-- CSS functions and arbitrary values -->
<div class="w-[calc(100%-2rem)] bg-[color:oklch(0.5_0.2_180)]">
  <!-- Modern color functions and calculations -->
</div>
```

### Responsive Design

```html
<!-- Mobile-first responsive classes with modern breakpoints -->
<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
>
  <article
    class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
  >
    <!-- Enhanced transitions and modern spacing -->
  </article>
</div>

<!-- Dark mode with system preference -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <!-- Automatic dark mode support -->
</div>
```

### Component Composition

```typescript
---
interface CardProps {
  variant?: 'default' | 'highlighted' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const { variant = 'default', size = 'md', className = '' } = Astro.props;

// Modern approach with CSS custom properties and utility composition
const baseClasses = 'rounded-lg shadow-md transition-all duration-200 hover:shadow-lg';

const variantClasses = {
  default: 'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700',
  highlighted: 'bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-700',
  error: 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-700'
};

const sizeClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

// Use template literals for better readability and maintenance
const classes = [
  baseClasses,
  variantClasses[variant],
  sizeClasses[size],
  className
].filter(Boolean).join(' ');
---

<div class={classes}>
  <slot />
</div>
```

### Advanced Patterns

```typescript
---
// Data attributes for styling state
const isActive = true;
const hasError = false;
---

<!-- State-based styling with data attributes -->
<button
  class="btn-primary data-[active]:bg-blue-600 data-[error]:border-red-500"
  data-active={isActive}
  data-error={hasError}
>
  Interactive Button
</button>

<!-- Modern focus management -->
<input
  class="border rounded-md px-3 py-2
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
         disabled:opacity-50 disabled:cursor-not-allowed
         invalid:border-red-500 invalid:ring-red-500"
  type="email"
  required
/>
```

## Performance Optimization

### Image Handling

```typescript
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Image
  src={heroImage}
  alt="Hero image"
  width={800}
  height={400}
  format="webp"
  quality={80}
  loading="lazy"
/>
```

### CSS Optimization

- Leverage Tailwind's automatic optimization and tree-shaking
- Use CSS custom properties with `@theme` directive for consistent theming
- Minimize custom CSS - prefer arbitrary values over custom CSS
- Use Tailwind's built-in performance optimizations
- Enable CSS splitting for better caching
- Use PostCSS plugins for additional optimizations

```css
/* Modern theme configuration with @theme directive */
@theme {
  --color-primary: oklch(0.5 0.2 180);
  --color-secondary: oklch(0.7 0.15 220);
  --font-heading: 'Inter Variable', system-ui, sans-serif;
  --size-content: 65ch;
}

/* Custom utilities when needed */
@utility screen-reader-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### JavaScript Optimization

- Minimize client-side JavaScript
- Use Astro's built-in optimizations
- Prefer server-side rendering for static content
- Use dynamic imports for heavy components

## Content Management

### Content Collections

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

### Markdown Processing

```typescript
---
import { getCollection } from 'astro:content';

const allPosts = await getCollection('blog', ({ data }) => {
  return !data.draft;
});

const sortedPosts = allPosts.sort((a, b) =>
  b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
);
---
```

## Error Handling & Debugging

### Type-Safe Error Handling

```typescript
---
interface ApiResponse<T> {
  data?: T;
  error?: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { error: `HTTP ${response.status}: ${response.statusText}` };
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
---
```

### Development Helpers

```typescript
---
// Use Astro's development utilities
if (import.meta.env.DEV) {
  console.log('Development mode - extra logging enabled');
}

// Type-safe environment variables
const API_URL = import.meta.env.PUBLIC_API_URL as string;
const SECRET_KEY = import.meta.env.SECRET_API_KEY as string;
---
```

## SEO & Accessibility

### Meta Tags & SEO

```typescript
---
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const { title, description, canonical, ogImage } = Astro.props;
const fullTitle = `${title} | Site Name`;
---

<head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  {canonical && <link rel="canonical" href={canonical} />}

  <!-- Open Graph -->
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  {ogImage && <meta property="og:image" content={ogImage} />}
</head>
```

### Accessibility Standards

- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Use Tailwind's screen reader utilities (`sr-only`)

```html
<button
  class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  aria-label="Submit form"
>
  Submit
</button>
```

## Testing Patterns

### Component Testing

```typescript
// Use Astro's testing utilities
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Card from '../components/Card.astro';

test('Card component renders correctly', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Card, {
    props: { title: 'Test Title' },
  });

  expect(result).toContain('Test Title');
});
```

## Build & Deployment

### Static Site Generation

```typescript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### Environment Configuration

- Use `.env` files for environment variables
- Prefix public variables with `PUBLIC_`
- Use TypeScript for environment variable types

## Common Patterns to Follow

1. **Component Props**: Always define TypeScript interfaces for component props
2. **Error Boundaries**: Implement proper error handling in data fetching
3. **Loading States**: Show loading indicators for async operations
4. **Form Handling**: Use progressive enhancement for forms
5. **State Management**: Prefer server-side state, minimize client state
6. **Code Splitting**: Use dynamic imports for large components
7. **Asset Optimization**: Leverage Astro's built-in asset pipeline
8. **Content Collections**: Use Astro's content collections for structured data
9. **SEO Best Practices**: Always include meta tags and structured data
10. **Accessibility**: Follow WCAG standards, use semantic HTML
11. **Testing**: Write unit tests for components and utilities
12. **Documentation**: Keep code well-documented, use JSDoc for complex
    functions
13. **Performance**: Use Astro's built-in performance optimizations
14. **Version Control**: Use Git for version control, follow branching
    strategies
15. **Code Reviews**: Conduct code reviews to maintain quality
16. **Continuous Integration**: Set up CI/CD pipelines for automated testing and
    deployment
17. **Error Logging**: Implement error logging for production environments
18. **Security**: Sanitize user inputs, avoid XSS vulnerabilities
19. **Internationalization**: Use Astro's i18n features for multi-language
    support
20. **Pull Requests**: Use pull requests for code changes, ensure they are
    reviewed before merging
21. **Create Reusable Components**: Break down UI into small, reusable
    components
22. **Use Astro Islands**: Leverage Astro's islands architecture for optimal
    performance
23. **Create breanch for each feature**: Use feature branches for development to
    keep the main branch stable
24. **Use Astro's built-in utilities**: Utilize Astro's built-in utilities for
    common tasks like fetching data, rendering components, and managing state
25. **Use Astro's built-in image optimization**: Use Astro's image component for
    automatic image optimization
26. **Use Astro's built-in routing**: Leverage Astro's routing system for clean
    and maintainable URLs
27. **Use Astro's built-in markdown support**: Use Astro's markdown support for
    content management
28. **Use Astro's built-in error handling**: Implement error boundaries and
    proper error handling in your components
29. **Use Astro's built-in testing utilities**: Write tests using Astro's
    testing utilities to ensure component functionality

## Anti-Patterns to Avoid

- Don't use client-side rendering for static content
- Avoid large client-side bundles
- Don't bypass TypeScript with `any` types
- Avoid custom CSS when Tailwind utilities exist
- Don't use client:load for non-critical components
- Avoid mixing server and client state carelessly
- Don't hardcode URLs, use Astro's routing system
- Avoid inline styles, prefer Tailwind utilities
- Don't ignore accessibility standards
- Avoid using `!important` in Tailwind classes
- Don't use global styles unless absolutely necessary
- Avoid using `@apply` excessively, prefer utility classes
- Don't use deprecated Tailwind features
- Avoid using `any` in TypeScript, prefer specific types
- Don't ignore TypeScript errors, fix them promptly
- Avoid large, monolithic components; break them down
- Remove unused code.
- Don't use inline scripts, prefer Astro's client directives
- Componentize as much as possible.
- TSX and TS files should not exceed 100 lines.
- Use clean code standards.
- Avoid using `console.log` in production code, use proper logging.
- Don't use `window` or `document` directly in server-side code
- Don't use `window` or `document` directly in server-side code

## Documentation

- https://astro.cloudinary.dev/installation
- https://docs.astro.build/en/guides/endpoints/
- https://docs.astro.build/en/concepts/why-astro/
- https://docs.astro.build/en/guides/typescript/
- https://docs.astro.build/en/guides/tailwind/
- https://docs.astro.build/en/guides/content-collections/
- https://docs.astro.build/en/guides/testing/
- https://docs.astro.build/en/concepts/islands/
- https://docs.astro.build/en/guides/framework-components/
- https://docs.astro.build/en/guides/on-demand-rendering/
- https://vitest.dev/guide/
- https://vitest.dev/api/mock.html
- https://vitest.dev/guide/environment.html
- https://vitest.dev/api/vi.html
- https://vitest.dev/api/expect.html
- https://vitest.dev/api/expect-typeof.html
- https://vitest.dev/api/assert.html
- https://vitest.dev/api/assert-type.html
- https://vitest.dev/guide/cli.html
- https://vitest.dev/guide/test-context.html
- https://docs.astro.build/en/guides/integrations-guide/netlify/
- https://tailwindcss.com/docs/adding-custom-styles
- https://tailwindcss.com/docs/installation/framework-guides/astro
- https://tailwindcss.com/docs/styling-with-utility-classes
- https://tailwindcss.com/docs/hover-focus-and-other-states
- https://tailwindcss.com/docs/responsive-design
- https://tailwindcss.com/docs/dark-mode
- https://tailwindcss.com/docs/theme
- https://tailwindcss.com/docs/colors
- https://tailwindcss.com/docs/container-queries
- https://tailwindcss.com/docs/arbitrary-values
- https://tailwindcss.com/docs/arbitrary-properties
- https://tailwindcss.com/docs/customizing-colors
- https://tailwindcss.com/docs/configuration
