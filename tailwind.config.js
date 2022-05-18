module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
		backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    }, 
  },
  plugins: [
		require('tailwindcss-filters'),
	],
}
