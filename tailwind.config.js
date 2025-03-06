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
  content: ["./public/*", "./src/*"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          light: '#f3e8ff',
                    DEFAULT: '#9370DB',
                    dark: '#7952B3',
        },
        secondary: {
          DEFAULT: '#f13946',

          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'primary': '#A07EE7',
        'secondary': '#F5F5F5',
        'accent': '#FF6B6B',
        'dark': '#333333',
        'light': '#FFFFFF',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: '1rem',
      },
      gray: {
        light: "#F5F5F5",
        DEFAULT: "#6e757a",
    },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },


  plugins: [],
}}

