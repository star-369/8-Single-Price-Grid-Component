/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: "var(--cyan)",
        "light-cyan": "var(--light-cyan)",
        "bright-yellow": "var(--bright-yellow)",
        "light-gray": "var(--light-gray)",
        "grayish-blue": "var(--grayish-blue)",
      },
      fontFamily: {
        karla: ["var(--karla)", "sans-serif"],
      },
      boxShadow: {
        "css-scan-01": "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
      },
    },
  },
  plugins: [],
};
