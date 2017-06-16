/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Make `require` available?
declare var require: any;

// Allows us to import .html and .scss files so they are available to `require()`
declare module '*.html' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}
