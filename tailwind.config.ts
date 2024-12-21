import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'db-blue': {
					light: '#a0ceff',
					dark: '#5193c8'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
