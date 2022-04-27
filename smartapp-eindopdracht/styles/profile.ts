import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
	name: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 20,
		color: colors.dark,
	},
	location: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		color: colors.grey[800],
		marginBottom: 4,
	},
	ratingtext: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 14,
		color: colors.dark,
		lineHeight: 16,
	},
	description: {
		fontFamily: 'Quicksand_400Regular',
		fontSize: 15,
		color: colors.dark,
	},
	fallback: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 20,
	},
	subtitle: {
		fontFamily: 'Quicksand_700Bold',
		fontSize: 16,
		color: colors.dark,
		marginBottom: 4,
	},
	dogname: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		color: colors.dark,
	},
	dogbreed: {
		fontFamily: 'Quicksand_400Regular',
		fontSize: 15,
		color: colors.grey[800],
	},
	home: {
		fontFamily: 'Quicksand_400Regular',
		fontSize: 16,
		color: colors.dark,
	},
	container: {
		padding: 16,
	},
	button: {
		backgroundColor: colors.purple[800],
	},
	backgroundButton: {
		padding: 8,
		backgroundColor: colors.light,
	},
	buttonText: {
		fontFamily: 'Quicksand_600SemiBold',
		fontSize: 16,
		color: colors.light,
		padding: 4,
	},
	spaceBottom: {
		marginBottom: 24,
	},
	containerDivider: {
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
	},
	serviceContainer: {
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
	},
	paddingTop: {
		paddingTop: 16
	}
})
