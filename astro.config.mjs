// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  integrations: [icon()],
  adapter: netlify(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Raleway",
        cssVariable: "--font-body",
        weights: ["500", "700"],
      },
      {
        provider: fontProviders.google(),
        name: "Architects Daughter",
        cssVariable: "--font-headings",
        weights: ["400"],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
