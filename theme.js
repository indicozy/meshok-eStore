import { extendTheme } from "@chakra-ui/react";

export const myNewTheme = extendTheme({
	colors: {
		white: '#f5f5f5',
		second_white: '#e4e4e4',
		black: "#121212",
		second_black: "#292929",
		yellow: '#FFC54D',
		teal_100: '#AEFEFF',
		teal_200: '#4FBDBA',
		teal_300: '#35858B',
		teal_400: '#072227',

	},
	breakpoints: {
		basic: '1rem',
		mob1: '600px',
		mob2: '460px',
		mob3: '320px',

		md: '760px',
		fl: '840px',
		lg: '62em',
		xl: '80em',
		'2xl'	: '96em',
	}
})