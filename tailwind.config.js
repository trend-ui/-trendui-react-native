/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [], // Avoid DOM-specific plugins like typography/forms
};
