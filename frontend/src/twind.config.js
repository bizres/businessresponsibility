export default {
  theme: {
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
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
