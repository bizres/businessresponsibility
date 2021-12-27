export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: `MontserratMedium, MontserratSemiBold, Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,


        'ms-extra-bold-italic': ['Montserrat-ExtraBoldItalic', 'sans-serif'],
        'ms-bold': ['Montserrat-Bold', 'sans-serif'],
        'ms-extra-light': ['Montserrat-ExtraLight', 'sans-serif'],
        'ms-light': ['Montserrat-Light', 'sans-serif'],
        'ms-medium': ['Montserrat-Medium', 'sans-serif'],
        'ms-medium-italic': ['Montserrat-MediumItalic', 'sans-serif'],
        'ms-regular': ['Montserrat-Regular', 'sans-serif'],
        'ms-semi-bold': ['Montserrat-SemiBold', 'sans-serif'],
        'ms-thin': ['Montserrat-Thin', 'sans-serif'],
        'ms-thin-italic': ['Montserrat-ThinItalic', 'sans-serif'],
      },
      colors: {
        'yellow-bright': "#fcdf3c",
        'yellow-dark': "#FFC000",
        'yellow-dark-900': '#E49B0F'
      },
      backgroundImage: {
        'hero-pattern': "url('/yellow_bg.jpg')",
      },
    },
    backgroundPosition: {
      'top-4': 'center top -24rem',
    }
  },
};
