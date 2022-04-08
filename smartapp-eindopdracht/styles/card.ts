import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: colors.light,
    borderRadius: 4,
    shadowColor: colors.grey[800],
    shadowOffset: {
      height: 2, 
      width: 1
    },
    shadowOpacity: 0.1
  },
  title: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 18,
    color: colors.dark,
  },
  distance: {
    fontFamily: 'Quicksand_500Medium',
    fontSize: 16,
    color: colors.grey[800],
    marginBottom: 4
  },
  ratingtext: {
    fontFamily: 'Quicksand_500Medium',
    fontSize: 14,
    color: colors.dark
  },
  description: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 15,
    color: colors.dark
  },
  price: {
    fontFamily: 'Quicksand_500Medium',
    fontSize: 14,
    color: colors.dark
  }
})
