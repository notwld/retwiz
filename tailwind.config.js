/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgScrollingReverse: {
          '100%': { backgroundPosition: '50px 50px' },
        },
        bgScrolling: {
          '0%': { backgroundPosition: '50px 50px' },
        },
      },
      animation: {
        'bg-scroll-reverse': 'bgScrollingReverse 20s linear infinite',
        'bg-scroll': 'bgScrolling 2s linear infinite',
      },
    },
  },
  plugins: [],
}

