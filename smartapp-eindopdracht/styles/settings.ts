import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
	buttonLogout: {
		backgroundColor: colors.light,
        padding: 16,
        borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
	},
	buttonLogoutText: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		color: colors.dark,
	},
})
