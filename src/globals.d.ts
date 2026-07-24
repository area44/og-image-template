declare module "*.css" {}

declare module "*.woff?url" {
  const content: string;
  export default content;
}
