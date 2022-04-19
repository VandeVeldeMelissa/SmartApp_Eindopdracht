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
	}
})
