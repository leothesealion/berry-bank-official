'use client';

// Suppress known React 19 + Sanity v3 compatibility warnings in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    
    // Suppress known Sanity v3 + React 19 warnings
    if (
      message.includes('disableTransition') ||
      message.includes('Each child in a list should have a unique "key"') && message.includes('ForwardRef') ||
      message.includes('Cannot update a component (`HotReload`)') && message.includes('ForwardRef')
    ) {
      return; // Suppress these specific warnings
    }
    
    originalError.apply(console, args);
  };
}
