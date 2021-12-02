/** Make PNGs importable as ES6 modules */
declare module '*.png' {
  const value: string;
  export = value;
}

/** Make SVGs importable as ES6 modules */
declare module '*.svg' {
  const value: string;
  export = value;
}

/** Shorthand to make a type optional */
type Optional<T> = T | undefined
