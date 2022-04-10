import { Box, HStack } from 'native-base'
import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import ReviewCard from '../../components/ReviewCard'
import styles from '../../styles'
import colors from '../../styles/colors'

export default () => {
	return (
		<View>
			<Box height='100%' marginTop={3}>
			    <HStack space={4} alignItems='center' justifyContent='center' marginBottom={2}>
        			<StarRating
        				disabled={true}
        				maxStars={5}
        				rating={4}
        				fullStarColor={colors.rating}
        				emptyStarColor={colors.grey[300]}
        				starSize={20}
        			/>
                    <Text style={styles.largeText}>3 reviews</Text>
    			</HStack>
                <ReviewCard/>
                <ReviewCard/>
			</Box>
		</View>
	)
}
