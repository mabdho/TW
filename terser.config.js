module.exports = {
  compress: {
    // Remove console statements
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ['console.log', 'console.info', 'console.warn', 'console.error'],
    
    // Dead code elimination
    dead_code: true,
    unused: true,
    
    // Variable optimization
    reduce_vars: true,
    collapse_vars: true,
    
    // Function optimization
    hoist_funs: true,
    inline: 2,
    
    // Conditional optimization
    conditionals: true,
    comparisons: true,
    booleans: true,
    
    // Loop optimization
    loops: true,
    
    // Property optimization
    properties: true,
    
    // String optimization
    join_vars: true,
    
    // Advanced optimizations
    passes: 3, // Multiple passes for better optimization
    pure_getters: true,
    unsafe: false, // Keep safe for compatibility
    unsafe_comps: false,
    unsafe_math: false,
    unsafe_proto: false,
    
    // ES6+ optimizations
    ecma: 2020,
    keep_fargs: false,
    
    // Size optimizations
    negate_iife: true,
    side_effects: false,
  },
  
  mangle: {
    // Variable name mangling
    toplevel: true,
    eval: false,
    keep_fnames: false,
    
    // ES6+ support
    module: true,
    
    // Safari 10+ support
    safari10: true,
    
    // Property mangling (disabled for safety)
    properties: false,
  },
  
  format: {
    // Output formatting
    comments: false,
    beautify: false,
    
    // ES6+ output
    ecma: 2020,
    
    // Compression
    ascii_only: false,
    inline_script: false,
    
    // Semicolons
    semicolons: true,
    
    // Preserve important annotations
    preserve_annotations: false,
  },
  
  // Source maps (disabled for production)
  sourceMap: false,
  
  // ES modules support
  module: true,
  
  // Compatibility
  ecma: 2020,
  
  // Keep important function names for debugging
  keep_fnames: false,
  keep_classnames: false,
}