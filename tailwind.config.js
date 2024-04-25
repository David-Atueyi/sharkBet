/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sharkBetFont: ["Nunito"],
      },
      screens: {
        mobile: "320px",

        tablet: "500px",

        pc: "940px",

        biggerPc: "1000px",
      },
      colors: {
        zinc: {
          0: "#FAFAFA",
          1: "#F4F4F5",
          2: "#E4E4E7",
          3: "#D4D4D8",
          4: "#A1A1AA",
          5: "#71717A",
          6: "#52525B",
          7: "#3F3F46",
          8: "#27272A",
          9: "#18181B",
          10: "#09090b",
        },
        blue: {
          0: "#EFF6FF",
          1: "#DBEAFE",
          2: "#BFDBFE",
          3: "#93C5FD",
          4: "#60A5FA",
          5: "#3B82F6",
          6: "#2563EB",
          7: "#1D4ED8",
          8: "#1E40AF",
          9: "#1E3A8A",
        },
        rose: {
          0: "#FFF1F2",
          1: "#FFE4E6",
          2: "#FECDD3",
          3: "#FDA4AF",
          4: "#FB7185",
          5: "#F43F5E",
          6: "#E11D48",
          7: "#BE123C",
          8: "#9F1239",
          9: "#881337",
        },
      },
    },
  },
  plugins: [],
};
