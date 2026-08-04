import * as astroPlugin from "prettier-plugin-astro";
import * as tailwindPlugin from "prettier-plugin-tailwindcss";

const astro = astroPlugin.default ?? astroPlugin;
const tailwind = tailwindPlugin.default ?? tailwindPlugin;

export default {
  plugins: [astro, tailwind],
  overrides: [
    { files: "*.astro", options: { parser: "astro" } },
    { files: "*.json", options: { parser: "json" } },
    { files: "*.yaml", options: { parser: "yaml" } },
    { files: ["*.js", "*.mjs"], options: { parser: "babel" } },
    { files: ["*.ts", "*.tsx"], options: { parser: "typescript" } },
  ],
  bracketSameLine: true,
};
