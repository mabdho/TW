export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Safe CSS minification for production
    ...(process.env.NODE_ENV === 'production' ? {
      'cssnano': {
        preset: ['default', {
          discardComments: { removeAll: true },
          calc: false, // Preserve Tailwind calc() functions
          colormin: false, // Preserve Tailwind colors
          convertValues: false, // Preserve Tailwind units
          discardUnused: false, // Preserve all CSS for Tailwind utilities
          mergeIdents: false, // Don't merge identifiers
          reduceIdents: false, // Don't reduce identifiers
          zindex: false, // Don't optimize z-index values
        }]
      }
    } : {})
  }
}