/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sketch': ['Kalam', 'cursive'],
        'hand': ['Caveat', 'cursive'],
        'marker': ['Permanent Marker', 'cursive'],
      },
      colors: {
        paper: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#f8f8f8',
          300: '#f1f1f1',
        },
        pencil: {
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1a1a1a',
        },
        ink: {
          blue: '#1e40af',
          black: '#0f172a',
          red: '#dc2626',
        },
        marker: {
          yellow: '#fef08a',
          pink: '#fda4af',
          blue: '#93c5fd',
          green: '#86efac',
          orange: '#fed7aa',
          purple: '#c4b5fd',
        }
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"1\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
        'notebook-lines': "linear-gradient(transparent 31px, #e5e7eb 31px, #e5e7eb 33px, transparent 33px)",
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'sketch': 'sketch 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sketch: {
          '0%, 100%': { 
            transform: 'translateX(0px) translateY(0px) rotate(0deg)',
            filter: 'blur(0px)'
          },
          '25%': { 
            transform: 'translateX(1px) translateY(-1px) rotate(0.5deg)',
            filter: 'blur(0.1px)'
          },
          '50%': { 
            transform: 'translateX(-1px) translateY(1px) rotate(-0.5deg)',
            filter: 'blur(0.1px)'
          },
          '75%': { 
            transform: 'translateX(1px) translateY(1px) rotate(0.3deg)',
            filter: 'blur(0.1px)'
          },
        }
      }
    },
  },
  plugins: [],
}