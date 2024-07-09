/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["*"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                "sf-pro-display": [
                    "SF Pro Display",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                background: "#F0F2F5",
                login: "#1877F2",
                createAccount: "#36A420",
                forgotten: "#0866FF",
                inputBackground: "#FFFCC8",
                titleText: "#1C1E21",
                lineColor: "#DDDFE2",
                placeholderText: "#CED0D3",
                focusBorderColor: "#0866FF",
            },
            screens: {
                mobile: "320px",
            },
        },
    },
    plugins: [],
};
