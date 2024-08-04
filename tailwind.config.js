import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			},
			fontSize: {
				xs: ['14px', '140%'], // Body/14
				sm: ['16px', '140%'], // Body/16
				base: ['18px', '150%'], // Body/18
				lg: ['20px', '120%'], // Header/20
				xl: ['24px', '120%'], // Header/24
				'2xl': ['32px', '120%'], // Header/32
				'3xl': ['40px', '120%'], // Header/40
				'4xl': ['56px', '120%'], // Header/56
				'5xl': ['68px', '120%'], // Display/68
				'6xl': ['80px', '120%'], // Display/80
				'7xl': ['116px', '110%'] // Display/116
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				canary: {
          100: "#FFC20E",
          80: "#FFCE3E",
          60: "#FFDA6E",
          40: "#FFE79F",
          20: "#FFF3CF",
          5: "#FFFCF3",
        },
        spring: {
          1: "#45DDB7",
          2: "#6EE1AD",
          3: "#83E3A7",
          4: "#9BE5A0",
          5: "#B3E79A",
          6: "#D0EA92",
          7: "#E7EC8C",
          8: "#FFEE85",
        },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		},
		fontFamily: {
			sans: ['Helvetica Neue', 'sans-serif']
		}
	},
	variants: {},
	plugins: [require('@tailwindcss/container-queries')]
};

export default config;
