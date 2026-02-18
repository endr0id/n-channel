import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  globalCss: {
    html: {
      backgroundColor: "mocha.base",
      color: "mocha.text",
    }
  },

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        mocha: {
          rosewater: { value: "#f5e0dc" },
          flamingo: { value: "#f2cdcd" },
          pink: { value: "#f5c2e7" },
          mauve: { value: "#cba6f7" },
          red: { value: "#f38ba8" },
          maroon: { value: "#eba0ac" },
          peach: { value: "#fab387" },
          yellow: { value: "#f9e2af" },
          green: { value: "#a6e3a1" },
          teal: { value: "#94e2d5" },
          sky: { value: "#89dceb" },
          sapphire: { value: "#74c7ec" },
          blue: { value: "#89b4fa" },
          lavender: { value: "#b4befe" },
          text: { value: "#cdd6f4" },
          subtext1: { value: "#bac2de" },
          subtext0: { value: "#a6adc8" },
          overlay2: { value: "#9399b2" },
          overlay1: { value: "#7f849c" },
          overlay0: { value: "#6c7086" },
          surface2: { value: "#585b70" },
          surface1: { value: "#45475a" },
          surface0: { value: "#313244" },
          base: { value: "#1e1e2e" },
          mantle: { value: "#181825" },
          crust: { value: "#11111b" },
        },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
