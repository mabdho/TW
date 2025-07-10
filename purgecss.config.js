module.exports = {
  content: [
    './client/src/**/*.{js,jsx,ts,tsx,html}',
    './client/index.html',
    './client/src/pages/**/*.{js,jsx,ts,tsx}',
    './client/src/components/**/*.{js,jsx,ts,tsx}',
    './client/src/blogs/**/*.{js,jsx,ts,tsx}',
  ],
  css: [
    './client/src/index.css',
    './dist/public/css/**/*.css'
  ],
  safelist: [
    // Preserve animation classes
    /^animate-/,
    /^animation-/,
    // Preserve utility classes that might be dynamic
    /^loading-/,
    /^hover:/,
    /^focus:/,
    /^active:/,
    /^dark:/,
    /^group-hover:/,
    // Preserve Tailwind responsive classes
    /^sm:/,
    /^md:/,
    /^lg:/,
    /^xl:/,
    /^2xl:/,
    // Preserve commonly used utility classes
    'container',
    'btn-primary',
    'nav-container',
    'hero-section',
    'loading-skeleton',
    // Preserve form states
    /^data-\[state=/,
    /^data-\[side=/,
    /^data-\[orientation=/,
    // Preserve Radix UI states
    /^\[data-state=/,
    /^\[data-side=/,
    /^\[data-orientation=/,
    // Preserve component variants
    /^variant-/,
    /^size-/,
    // Common dynamic classes
    'hidden',
    'block',
    'flex',
    'grid',
    'inline',
    'invisible',
    'visible',
    'opacity-0',
    'opacity-100',
    'translate-x-0',
    'translate-y-0',
    'scale-100',
    'rotate-0',
  ],
  keyframes: true,
  fontFace: true,
  variables: true,
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}