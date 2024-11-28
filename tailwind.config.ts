import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { withUt } from "uploadthing/tw";
import tailwindTypography from "@tailwindcss/typography";

export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography, daisyui],
  daisyui: { themes: ["pastel"] },
}) satisfies Config;
