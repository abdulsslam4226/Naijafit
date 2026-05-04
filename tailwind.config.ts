import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#012d1d",
        "primary-container": "#1b4332",
        "primary-fixed": "#c1ecd4",
        "primary-fixed-dim": "#a5d0b9",
        "on-primary": "#ffffff",
        "on-primary-container": "#86af99",
        "on-primary-fixed": "#002114",
        "on-primary-fixed-variant": "#274e3d",
        
        "secondary": "#a04100",
        "secondary-container": "#fd7729",
        "secondary-fixed": "#ffdbcc",
        "secondary-fixed-dim": "#ffb693",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#5e2300",
        "on-secondary-fixed": "#351000",
        "on-secondary-fixed-variant": "#7a3000",
        
        "tertiary": "#725c00",
        "tertiary-container": "#cea700",
        "tertiary-fixed": "#ffe082",
        "tertiary-fixed-dim": "#eec200",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#4e3e00",
        "on-tertiary-fixed": "#231b00",
        "on-tertiary-fixed-variant": "#564500",
        
        "background": "#fbf9f4",
        "on-background": "#1b1c19",
        
        "surface": "#fbf9f4",
        "on-surface": "#1b1c19",
        "surface-variant": "#e4e2dd",
        "on-surface-variant": "#414844",
        "surface-dim": "#dbdad5",
        "surface-bright": "#fbf9f4",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3ee",
        "surface-container": "#f0eee9",
        "surface-container-high": "#eae8e3",
        "surface-container-highest": "#e4e2dd",
        
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        
        "outline": "#717973",
        "outline-variant": "#c1c8c2",
        "inverse-surface": "#30312e",
        "inverse-on-surface": "#f2f1ec",
        "inverse-primary": "#a5d0b9",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "headline-xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", fontWeight: "500" }],
      },
      spacing: {
        "unit": "8px",
        "container-padding": "24px",
        "stack-lg": "40px",
        "stack-md": "24px",
        "stack-sm": "12px",
        "gutter": "16px",
      },
    },
  },
  plugins: [],
};
export default config;
