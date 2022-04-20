import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
	flex: {
		flex: 1
	},
    iconHeader: {
        marginRight: 8
    },
	list: {
		marginVertical: 4
	},
	largeText: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 20,
		color: colors.dark
	},
	inputSearchbar: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
	inputContainer: {
		backgroundColor: colors.grey[400],
		margin: 10,
		borderRadius: 4,
	},
	searchBarIcon: {
		marginLeft: 8,
		color: colors.light
	},
	locationText: {
		fontFamily: 'Quicksand_400Regular',
		fontSize: 16,
		color: colors.dark,
		paddingVertical: 12,
	},
	locationContainer: {
		borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
		marginHorizontal: 10
	},
	button: {
		position: 'absolute',
		marginHorizontal: 8,
		bottom: 8,
		width: '100%',
		backgroundColor: colors.purple[800],
	},
	buttonText: {
		fontFamily: 'Quicksand_600SemiBold',
		fontSize: 16,
		color: colors.light,
		padding: 4,
	},
    subtitle: {
        fontFamily: 'Quicksand_700Bold',
		fontSize: 16,
		color: colors.dark,
        marginBottom: 2,
    },
	description: {
		fontFamily: 'Quicksand_400Regular',
		fontSize: 15,
		color: colors.dark,
	},
	container: {
		padding: 8
	},
	counter: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		width: 14
	},
	containerDivider: {
		marginHorizontal: 8,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
	}
})
