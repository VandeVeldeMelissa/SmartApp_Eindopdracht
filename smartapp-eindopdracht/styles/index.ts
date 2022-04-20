import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
	//Layout
	container: {
		padding: 8
	},
	list: {
		marginVertical: 4
	},
	containerDivider: {
		marginHorizontal: 8,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
	},
	topContainer: {
		borderTopWidth: 1,
		borderTopColor: colors.grey[200],
	},

	//Icon
    iconHeader: {
        marginRight: 8
    },

	//Searchbar
	searchBarIcon: {
		marginLeft: 8,
		color: colors.grey[800]
	},
	inputSearchbar: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		paddingVertical: 10,
		paddingHorizontal: 16,
		color: colors.grey[800]
	},
	inputContainer: {
		backgroundColor: colors.grey[200],
		margin: 10,
		borderRadius: 4,
	},

	//Locations list
	locationContainer: {
		borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
		marginHorizontal: 10
	},
	locationText: {
		fontFamily: 'Quicksand_400Regular',
		fontSize: 16,
		color: colors.dark,
		paddingVertical: 12,
	},

	//Button bottom
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

	//Text
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
})
