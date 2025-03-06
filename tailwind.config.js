/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*", "./src/*", "./*.html"],
theme: {
 extend: {
   colors: {
     purple: {
       400: '#a67ce6', // Custom purple for cu.rly branding
     },
   },
   fontFamily: {
     sans: ['Arial', 'sans-serif'],
   },
   fontSize: {
     xs: '0.75rem',
     sm: '0.875rem',
     base: '1rem',
     lg: '1.125rem',
     xl: '1.25rem',
     '2xl': '1.5rem',
   },
   borderWidth: {
     '1': '1px',
     '2': '2px',
   },
   spacing: {
     '0.5': '0.125rem',
     '1': '0.25rem',
     '2': '0.5rem',
     '3': '0.75rem',
     '4': '1rem',
     '6': '1.5rem',
     '8': '2rem',
   },
   borderRadius: {
     'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     'lg': '0.5rem',
     'full': '9999px',
   }
 },
},
variants: {
 extend: {
   opacity: ['hover', 'focus'],
   backgroundColor: ['hover', 'focus'],
   textColor: ['hover', 'focus'],
 },
},
plugins: [],
}