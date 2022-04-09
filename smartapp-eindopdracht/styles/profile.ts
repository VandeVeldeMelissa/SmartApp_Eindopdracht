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
        lineHeight: 16
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
        marginTop: 12,
        marginBottom: 2,
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
    }
})
