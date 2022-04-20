import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
	container: {
		padding: 8,
	},
	button: {
		fontFamily: 'Quicksand_500Medium',
		color: colors.purple[900],
		fontSize: 18,
	},
	text: {
		fontFamily: 'Quicksand_500Medium',
		color: colors.dark,
		fontSize: 15,
	},
	textTitle: {
		fontFamily: 'Quicksand_600SemiBold',
		color: colors.dark,
		fontSize: 20,
	},
})
