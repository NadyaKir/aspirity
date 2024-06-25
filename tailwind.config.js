/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#001A72",
        darkBlue: "#0047BB",
        customOrange: "#FA4616",
        accent: "#0047BB",
        success: "#2E7D32",
        bgPrimary: "#141414",
        bgSecondary: "#232324",
        bgTertiary: "#202021",
        bgModal: "#303030",
        textPrimary: "#E1E3E6",
        textSecondary: "#B0B1B6",
        textTertiary: "#76787A",
        iconPrimary: "#E1E3E6",
        iconSecondary: "#B0B1B6",
        iconTertiary: "#76787A",
        iconPrimary: "#363738",
        accentDisabled: "#424242",
        blueHover: "#003182",
        blueFocused: "#4C7ECF",
        transparentBlueHover: "rgba(0,71,187,0.10)",
        transparentBlueFocused: "rgba(0,71,187,0.50)",
        errorHover: "#C62828",
        errorFocused: "#E06D6D",
        transparentErrorHover: "rgba(211,47,47,0.10)",
        transparentErrorFocused: "rgba(211,47,47,0.50)",
        successHover: "#1B5E20",
        successFocused: "#6CA46F",
        transparentSuccessHover: "rgba(46,125,50,0.10)",
        transparentSuccessFocused: "rgba(46,125,50,0.50)",
        transparentContrastHover: "rgba(255,255,255,0.04)",
        transparentContrastFocused: "rgba(255,255,255,0.12)",
      },
    },
  },
  plugins: [],
};
