import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
	overviewName: {
		fontFamily: 'Quicksand_600SemiBold',
		fontSize: 16,
		color: colors.dark,
	},
    recentText: {
        fontFamily: 'Quicksand_400Regular',
		fontSize: 14,
		color: colors.grey[700],
    },
    timeStamp: {
        fontFamily: 'Quicksand_400Regular',
		fontSize: 13,
		color: colors.dark,
    },
    hiddenButtonLabel: {
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 12
    },
    darkButton: {
        color: colors.grey[900]
    },
    lightButton: {
        color: colors.light
    },
    heading: {
        fontFamily: 'Quicksand_700Bold',
		fontSize: 24,
		color: colors.dark,
        marginVertical: 8,
        marginHorizontal: 16
    }

})
