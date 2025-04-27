// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Raleway",
      cssVariable: "--font-body"
    },
    {
      provider: fontProviders.google(),
      name: "Architects Daughter",
      cssVariable: "--font-headings"
    }]
  }
});
