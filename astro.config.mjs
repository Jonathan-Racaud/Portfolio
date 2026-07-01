import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portfolio.jracaud.com",
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
