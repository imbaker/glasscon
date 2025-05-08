// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  integrations: [icon()],

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Raleway",
        cssVariable: "--font-body",
      },
      {
        provider: fontProviders.google(),
        name: "Architects Daughter",
        cssVariable: "--font-headings",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
