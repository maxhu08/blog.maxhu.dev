import defaultTheme from "tailwindcss/defaultTheme";
import tailwindTypography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        borders: "var(--color-borders)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        global: "var(--border-radius)",
        inherit: "inherit",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        "5/3": "5/3",
      },
      keyframes: {
        "slide-up-fade": {
          from: {
            opacity: 0,
            transform: "translateY(10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "slide-down-fade": {
          from: {
            opacity: 1,
            transform: "translateY(0px)",
          },
          to: {
            opacity: 0,
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "slide-up-fade": "slide-up-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade":
          "slide-down-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      typography:
        '() => ({\n        custom: {\n          css: {\n            "--tw-prose-body": "var(--color-body)",\n            "--tw-prose-headings": "var(--color-headings)",\n            "--tw-prose-lead": "var(--color-lead)",\n            "--tw-prose-links": "var(--color-links)",\n            "--tw-prose-bold": "var(--color-bold)",\n            "--tw-prose-counters": "var(--color-counters)",\n            "--tw-prose-bullets": "var(--color-bullets)",\n            "--tw-prose-hr": "var(--color-hr)",\n            "--tw-prose-quotes": "var(--color-quotes)",\n            "--tw-prose-quote-borders": "var(--color-quote-borders)",\n            "--tw-prose-captions": "var(--color-captions)",\n            "--tw-prose-code": "var(--color-code-fg)",\n            "--tw-prose-pre-bg": "var(--color-pre-code-bg)",\n            "--tw-prose-pre-code": "var(--color-pre-code-fg)",\n            "--tw-prose-th-borders": "var(--color-th-borders)",\n            "--tw-prose-td-borders": "var(--color-td-borders)",\n          },\n        },\n      })',
    },
  },
  plugins: [
    tailwindTypography,
    plugin(({ addVariant }) => {
      addVariant("hover-none", "@media (hover: none) and (pointer: coarse)");
    }),
    require("tailwindcss-animate"),
  ],
};

export default tailwindConfig;
