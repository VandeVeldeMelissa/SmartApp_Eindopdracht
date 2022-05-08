import { Box, HStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'
import ReviewCard from '../../components/ReviewCard'
import Review from '../../interfaces/Review'
import styles from '../../styles'
import colors from '../../styles/colors'
import PetSitter from '../../interfaces/PetSitter'
import { statement, transaction } from '../../utils/db'
import { SQLResultSet, SQLTransaction } from 'expo-sqlite'

export default ({ route, petSitter }: { route: any; petSitter: PetSitter }) => {
	const [reviews, setReviews] = useState<Review[]>([])

	const getReviews = async () => {
		const tx: SQLTransaction = await transaction()
		const result: SQLResultSet = await statement(
			tx,
			`SELECT * FROM reviews WHERE userId IS "${route.params.userid}" ORDER BY rating DESC`,
		)
		setReviews(result.rows._array)
	}

	useEffect(() => {
		getReviews()
	}, [])

	const renderReview = ({ item }: { item: Review }) => (
		<ReviewCard item={item} key={item.id} />
	)

	const renderResponseWhenNoReviews = () => {
		if (reviews.length == 0) {
			return (<Text style={styles.noResultsText}>No reviews (yet).</Text>)
		}
	}

	return (
		<View>
			<Box height="100%" marginTop={3}>
				<HStack
					space={4}
					alignItems="center"
					justifyContent="center"
					marginBottom={2}
				>
					<Text style={styles.largeText}>{route.params.rating}</Text>
					<StarRating
						disabled={true}
						maxStars={5}
						rating={route.params.rating}
						fullStarColor={colors.rating}
						emptyStarColor={colors.grey[300]}
						starSize={20}
					/>
					<Text style={styles.largeText}>{reviews.length} review(s)</Text>
				</HStack>
				{renderResponseWhenNoReviews()}
				<FlatList
					style={styles.list}
					data={reviews}
					renderItem={renderReview}
					keyExtractor={(item) => item.id}
				/>
			</Box>
		</View>
	)
}
