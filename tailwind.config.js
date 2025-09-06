/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// Hubris Minerals Gold Theme Colors
				gold: {
					DEFAULT: '#FFD700',
					50: '#FFF9E6',
					100: '#FFF3CC',
					200: '#FFE699',
					300: '#FFDA66',
					400: '#FFCD33',
					500: '#FFD700',
					600: '#E6C200',
					700: '#CCAD00',
					800: '#B39900',
					900: '#996600',
				},
				forest: {
					DEFAULT: '#0F553B',
					50: '#E6F2ED',
					100: '#CCE6DB',
					200: '#99CCB8',
					300: '#66B394',
					400: '#339971',
					500: '#0F553B',
					600: '#0C4A33',
					700: '#093E2A',
					800: '#063322',
					900: '#03271A',
				},
				olive: {
					DEFAULT: '#E2A929',
					50: '#FDF5E8',
					100: '#FBEBD1',
					200: '#F7D7A3',
					300: '#F3C375',
					400: '#EFAF47',
					500: '#E2A929',
					600: '#CB9124',
					700: '#B4791F',
					800: '#9D611A',
					900: '#864915',
				},
				malachite: '#03D26F',
				cyprus: '#014651',
				aqua: '#EAF4F4',
				starship: '#CEF431',
				gray: {
					900: '#161514',
				},
				primary: {
					DEFAULT: '#FFD700',
					foreground: '#0F553B',
				},
				secondary: {
					DEFAULT: '#0F553B',
					foreground: '#FFD700',
				},
				accent: {
					DEFAULT: '#E2A929',
					foreground: '#0F553B',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px #FFD700' },
					'50%': { boxShadow: '0 0 20px #FFD700' },
				},
				'slide-up': {
					'from': { transform: 'translateY(100%)', opacity: '0' },
					'to': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-in-left': {
					'from': { transform: 'translateX(-100%)', opacity: '0' },
					'to': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-right': {
					'from': { transform: 'translateX(100%)', opacity: '0' },
					'to': { transform: 'translateX(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
			},
			glassmorphism: {
				backdrop: 'backdrop-blur-sm bg-black/20',
				card: 'backdrop-blur-md bg-white/10 border border-white/20',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
