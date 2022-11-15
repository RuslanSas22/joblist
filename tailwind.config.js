/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    fontSize: {
      xxs: ["8px", "12px"],
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["30px", "36px"],
    },
    minWidth: {
      content: "550px",
    },
    screens: {
      se: { max: "700px" },
      sm: { max: "740px" },
      md: { max: "1028px" },
    },
    maxWidth: {
      content: "660px",
    },
    extend: {
      colors: {
        contactsAddress: "E8EBF3",
        background: "#e6e9f2",
        location: "#878D9D",
        title: "#3A4562",
        subtitle: "#878D9D",
        button: "#384564",
        employment: "rgba(161, 177, 219, 0.317343)",
        employmentText: "#55699E",
        benefits: "rgba(255, 207, 0, 0.15)",
        benefitsText: "#988B49",
        paggination: "#70778B",
        focusedPage: "#5876C5",
      },
    },
  },
  plugins: [],
};
