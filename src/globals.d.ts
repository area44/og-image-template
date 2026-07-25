declare module "*.css" {}

declare module "*.woff?url" {
  const content: string;
  export default content;
}

declare module "*?raw" {
  const content: string;
  export default content;
}

declare module "*.woff2?url" {
  const content: string;
  export default content;
}
