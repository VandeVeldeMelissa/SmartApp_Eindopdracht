import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
	container: {
		padding: 8,
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
		fontFamily: 'Quicksand_600SemiBold',
		fontSize: 16,
		color: colors.dark,
		marginBottom: 2,
        marginTop: 8,
        marginLeft: 8
	},
	select: {
		color: colors.dark,
	},
	switchContainer: {
		marginHorizontal: 8,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: colors.grey[200],
	},
	switchText: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		color: colors.dark,
	},
	selectText: {
		fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		color: colors.dark,
	},
    selectedText: {
        color: colors.grey[600]
    },
	topContainer: {
		borderTopWidth: 1,
		borderTopColor: colors.grey[200],
	},
    slider: {
        width: '80%', 
        height: 40
    }, 
    priceText: {
        fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
		color: colors.purple[900],
		marginBottom: 2,
        marginTop: 8,
        marginHorizontal: 6
    },
    spaceBottom: {
        marginBottom: 16
    },
    spaceTop: {
        marginTop: 8
    },
    serviceTitle: {
        fontFamily: 'Quicksand_500Medium',
		fontSize: 16,
    },
    serviceDescription: {
        fontFamily: 'Quicksand_400Regular',
		fontSize: 14,
    }
})
