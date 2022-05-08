import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		minWidth: '80%',
	},
	input: {
		backgroundColor: colors.light,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 4,
		marginTop: 8,
		fontSize: 16,
		fontFamily: 'Quicksand_500Medium',
	},
	buttonContainer: {
		width: '60%',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 32,
	},
	button: {
		backgroundColor: colors.purple[600],
		padding: 14,
		borderRadius: 8,
		alignItems: 'center',
		borderColor: colors.purple[600],
		borderWidth: 2,
		minWidth: '100%',
	},
	buttonText: {
		color: colors.light,
		fontFamily: 'Quicksand_700Bold',
		fontSize: 16,
	},
	buttonOutline: {
		backgroundColor: colors.light,
		borderColor: colors.purple[600],
		borderWidth: 2,
		marginTop: 6,
	},
	buttonOutlineText: {
		color: colors.purple[600],
		fontFamily: 'Quicksand_700Bold',
		fontSize: 16,
	},
	inputLabel: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		marginTop: 12,
		color: colors.dark,
	},
	containerInputAndButtons: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerTitle: {
		alignItems: 'center',
		marginBottom: 24,
	},
	title: {
		fontFamily: 'Quicksand_600SemiBold',
		fontSize: 20,
		color: colors.purple[700],
	},
	icon: {
		marginBottom: 16,
	},
	smallText: {
		marginTop: 8,
		fontFamily: 'Quicksand_500Medium',
		color: colors.grey[800],
	},
})
