/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("tailwind-config")], // Add this line
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
