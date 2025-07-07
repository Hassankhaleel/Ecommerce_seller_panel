/** @type {import('tailwindcss').Config} */
import { mauve, violet, red, blackA, gray } from "@radix-ui/colors";

export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ...mauve,
                ...violet,
                ...red,
                ...blackA,
                ...gray,
            },
            keyframes: {c
                overlayShow: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                contentShow: {
                    from: {
                        opacity: "0",
                        transform: "translate(-50%, -48%) scale(0.96)",
                    },
                    to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
                },
            },
            animation: {
                overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
    plugins: [],
};
